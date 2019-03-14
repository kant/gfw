import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactFullpage from '@fullpage/react-fullpage';
import cx from 'classnames';

import MediaQuery from 'react-responsive';
import { SCREEN_M } from 'utils/constants';

import Header from 'components/header';
import TopicsHeader from 'pages/topics/components/topics-header';
import TopicsFooter from 'pages/topics/components/topics-footer';
import Text from 'pages/topics/components/topics-text';
import Image from 'pages/topics/components/topics-image';
import Button from 'components/ui/button';

import scrollOverflow from './vendors/scrolloverflow.min';

import './styles.scss';

const anchors = ['intro', 'slides', 'footer'];
const pluginWrapper = () => ({
  scrollOverflow
});

class TopicsPage extends PureComponent {
  state = {
    fullpageApi: null,
    skip: false,
    slideLeaving: 0
  };

  handleLeave = (origin, destination, direction) => {
    const location = window.location.hash && window.location.hash.split('/');
    const slide =
      (location && location.length > 1 && parseInt(location[1], 10)) || 0;

    if (this.state.skip) {
      this.setState({ skip: false, slideLeaving: slide });
      this.fullpageApi.moveTo('slides', 3);
      return true;
    }

    if (origin.anchor !== 'slides') {
      return true;
    }

    if (direction === 'down' && origin.anchor === 'slides' && slide !== 3) {
      this.fullpageApi.moveSlideRight();
      return false;
    } else if (
      direction === 'up' &&
      origin.anchor === 'slides' &&
      slide !== 0
    ) {
      this.fullpageApi.moveSlideLeft();
      return false;
    }

    if (direction === 'up') {
      this.setState({ slideLeaving: 0 });
    } else if (direction === 'down') {
      this.setState({ slideLeaving: 3 });
    }

    return true;
  };

  handleSlideLeave = (section, origin) => {
    this.setState({ slideLeaving: origin.index });
  };

  render() {
    const { links, topicData, title } = this.props;
    const { cards, slides, intro } = topicData || {};
    const { slideLeaving } = this.state;

    return (
      <MediaQuery minWidth={SCREEN_M}>
        {isDesktop => (
          <div className="l-topics-page">
            <Header isMobile={!isDesktop} />
            <ReactFullpage
              pluginWrapper={pluginWrapper}
              scrollOverflow
              anchors={anchors}
              onLeave={this.handleLeave}
              onSlideLeave={this.handleSlideLeave}
              render={({ fullpageApi }) => {
                this.fullpageApi = fullpageApi;

                return (
                  <ReactFullpage.Wrapper>
                    <TopicsHeader
                      topics={links}
                      intro={intro}
                      fullpageApi={fullpageApi}
                      title={title}
                    />
                    <div className="section">
                      {slides &&
                        slides.map((s, index) => (
                          <div key={s.subtitle} className="slide">
                            <div className="row">
                              <div className="column small-12 medium-4">
                                <div className="topic-content">
                                  <Text
                                    className={cx({
                                      leaving: slideLeaving === index
                                    })}
                                    text={s.text}
                                    title={s.title}
                                    subtitle={s.subtitle}
                                  />
                                  <Button
                                    theme="theme-button-grey topics-btn"
                                    onClick={() => {
                                      this.setState({ skip: true }, () => {
                                        fullpageApi.moveTo('footer', 0);
                                      });
                                    }}
                                  >
                                    Related tools
                                  </Button>
                                </div>
                              </div>
                              <div className="column small-12 medium-8 topic-image">
                                <Image url={s.src} description={s.subtitle} />
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                    <TopicsFooter cards={cards} topic={title} />
                  </ReactFullpage.Wrapper>
                );
              }}
            />
          </div>
        )}
      </MediaQuery>
    );
  }
}

TopicsPage.propTypes = {
  links: PropTypes.array.isRequired,
  topicData: PropTypes.object,
  title: PropTypes.string
};

export default TopicsPage;
