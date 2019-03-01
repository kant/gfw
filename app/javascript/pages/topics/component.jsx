import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Header from 'components/header';
import TopicsHeader from 'pages/topics/components/topics-header';
// import TopicsFooter from 'pages/topics/components/topics-footer';

import Section from 'pages/topics/components/section';
import Biodiversity from 'pages/topics/content/biodiversity.json';

import Text from 'pages/topics/components/topics-text';
import Image from 'pages/topics/components/topics-image';
import Button from 'components/ui/button';

import './styles.scss';

class TopicsPage extends PureComponent {
  componentDidMount() {
    this.anchors = [
      'intro',
      'biodiversity1',
      'biodiversity2',
      'biodiversity3',
      'biodiversity4',
      'footer'
    ];
    /* global $ */
    $(document).ready(() => {
      $('#fullpage').fullpage({
        scrollOverflow: true,
        navigation: true,
        navigationPosition: 'right',
        anchors: this.anchors
      });
    });
  }

  // componentWillUnmount() {
  //   $.document.ready(() => {
  //     $('#fullpage').destroy('all');
  //   });
  // }

  render() {
    // const { section } = this.props;
    // const SectionComponent = sectionComponents[(section && section.component) || 'projects'];

    const { links } = this.props;
    const activeTopic = links.find(t => t.active);
    const topic = activeTopic ? activeTopic.component : Biodiversity;

    return (
      <div className="l-topics-page">
        <Header />
        <div id="fullpage">
          <TopicsHeader topics={links} />
          {topic.map(s => (
            <Section key={s.subtitle} anchors={this.anchors}>
              <div className="row">
                <div className="column small-12 medium-4">
                  <div className="topic-content">
                    <Text text={s.text} title={s.title} subtitle={s.subtitle} />
                    <Button theme="theme-button-grey topics-btn">Skip</Button>
                  </div>
                </div>
                <div className="column small-12 medium-8 topic-image">
                  <Image url={s.src} description={s.subtitle} />
                </div>
              </div>
            </Section>
          ))}
          {/* <TopicsFooter /> */}
        </div>
      </div>
    );
  }
}

TopicsPage.propTypes = {
  links: PropTypes.array.isRequired
};

export default TopicsPage;
