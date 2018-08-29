import { createElement, PureComponent } from 'react';
import { connect } from 'react-redux';

import { getMapSettings } from 'components/map-v2/selectors';

import PageComponent from './page-component';

const mapStateToProps = ({ location, dataAnalysis }) => ({
  analysis: dataAnalysis.analysis,
  mapSettings: getMapSettings(location)
});

class PageContainer extends PureComponent {
  render() {
    return createElement(PageComponent, {
      ...this.props
    });
  }
}

export default connect(mapStateToProps)(PageContainer);
