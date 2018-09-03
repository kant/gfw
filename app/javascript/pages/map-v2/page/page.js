import { createElement, PureComponent } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { getMapSettings } from 'components/map-v2/selectors';

import PageComponent from './page-component';

const mapStateToProps = ({ location, dataAnalysis, myGfw }) => ({
  analysis: dataAnalysis.analysis,
  loggedIn: !isEmpty(myGfw.data),
  mapSettings: getMapSettings(location)
});

class PageContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: false
    };
  }

  handleShowMenu = () => {
    const { showHeader } = this.state;
    this.setState({ showHeader: !showHeader });
  };

  render() {
    return createElement(PageComponent, {
      ...this.props,
      ...this.state,
      handleShowMenu: this.handleShowMenu
    });
  }
}

export default connect(mapStateToProps)(PageContainer);