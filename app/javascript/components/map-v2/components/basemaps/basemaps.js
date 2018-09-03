import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import withTooltipEvt from 'components/ui/with-tooltip-evt';

import { setMapSettings, setLandsatBasemap } from 'components/map-v2/actions';
import {
  getBasemap,
  getLabels,
  getActiveDatasetsState,
  getMapZoom,
  getActiveBoundaryDatasets,
  getBoundaryDatasets
} from 'components/map-v2/selectors';

import basemaps, { labels } from './basemaps-schema';
import BasemapsComponent from './basemaps-component';

function mapStateToProps({ datasets, location }) {
  return {
    activeDatasets: getActiveDatasetsState(location),
    mapZoom: getMapZoom(location),
    activeLabels: getLabels(location),
    activeBasemap: getBasemap(location),
    boundaries: [{ label: 'No boundaries', value: null }].concat(
      getBoundaryDatasets({
        query: location.query,
        datasets: datasets.datasets
      })
    ),
    activeBoundaries: getActiveBoundaryDatasets({
      query: location.query,
      datasets: datasets.datasets
    }),
    basemaps,
    labels,
    landsatYears: basemaps.landsat.availableYears.map(y => ({
      label: y,
      value: y
    }))
  };
}

class BasemapsContainer extends React.Component {
  static propTypes = {
    activeDatasets: PropTypes.array,
    activeBoundaries: PropTypes.object,
    setMapSettings: PropTypes.func.isRequired,
    setLandsatBasemap: PropTypes.func.isRequired
  };

  selectBasemap = (basemap, year) => {
    if (basemap.dynamic) {
      if (basemap.id === 'landsat') {
        return this.props.setLandsatBasemap(year, basemap.defaultUrl);
      }
    }
    return this.props.setMapSettings({ basemap });
  };

  selectLabels = label => this.props.setMapSettings({ label });

  selectBoundaries = item => {
    const { activeDatasets, activeBoundaries } = this.props;
    const filteredLayers = activeBoundaries
      ? activeDatasets.filter(l => l.dataset !== activeBoundaries.dataset)
      : activeDatasets;
    if (item.value) {
      const newActiveDatasets = [
        {
          layers: [item.layer],
          dataset: item.dataset,
          opacity: 1,
          visibility: true
        },
        ...filteredLayers
      ];
      this.props.setMapSettings({ datasets: newActiveDatasets });
    } else {
      this.props.setMapSettings({ datasets: filteredLayers });
    }
  };

  render() {
    return (
      <BasemapsComponent
        {...this.props}
        selectBasemap={this.selectBasemap}
        selectLabels={this.selectLabels}
        selectBoundaries={this.selectBoundaries}
      />
    );
  }
}

export default withTooltipEvt(
  connect(mapStateToProps, {
    setMapSettings,
    setLandsatBasemap
  })(BasemapsContainer)
);