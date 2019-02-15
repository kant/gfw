import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactMapGL from 'react-map-gl';

import Loader from 'components/ui/loader';
import Icon from 'components/ui/icon';

import iconCrosshair from 'assets/icons/crosshair.svg';
import 'mapbox-gl/dist/mapbox-gl.css';

import Popup from './components/popup';
import MapDraw from './components/draw';
import MapAttributions from './components/map-attributions';
import LayerManagerComponent from './components/layer-manager';

import './styles.scss';

class MapComponent extends PureComponent {
  state = {
    mapReady: false
  };

  getCursor = ({ isHovering, isDragging }) => {
    if (isHovering) return 'pointer';
    if (isDragging) return 'grabbing';
    return 'grab';
  };

  render() {
    const {
      className,
      loading,
      mapOptions,
      basemap,
      draw,
      handleMapMove,
      handleMapInteraction,
      zoom,
      lat,
      lng,
      setMapRect,
      setMap,
      interactiveLayers,
      loadingMessage
    } = this.props;
    const { mapReady } = this.state;

    return (
      <div
        className={cx('c-map', { 'no-pointer-events': draw }, className)}
        style={{ backgroundColor: basemap.color }}
        ref={el => {
          setMapRect(el);
        }}
      >
        <ReactMapGL
          ref={map => {
            this.map = map && map.getMap();
            setMap(map && map.getMap());
          }}
          width="100%"
          height="100%"
          latitude={lat}
          longitude={lng}
          zoom={zoom}
          mapStyle="mapbox://styles/resourcewatch/cjrkzkvhy9roh2smyy26avof0"
          mapOptions={mapOptions}
          onViewportChange={handleMapMove}
          onClick={handleMapInteraction}
          onLoad={() => this.setState({ mapReady: true })}
          getCursor={this.getCursor}
          interactiveLayerIds={interactiveLayers}
        >
          {mapReady && (
            <Fragment>
              <LayerManagerComponent map={this.map} />
              <Popup map={this.map} />
              <MapDraw map={this.map} drawing={draw} />
            </Fragment>
          )}
        </ReactMapGL>
        <Icon className="map-icon-crosshair" icon={iconCrosshair} />
        <MapAttributions className="map-attributions" />
        {loading && (
          <Loader
            className="map-loader"
            theme="theme-loader-light"
            message={loadingMessage}
          />
        )}
      </div>
    );
  }
}

MapComponent.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  loadingMessage: PropTypes.string,
  mapOptions: PropTypes.object,
  basemap: PropTypes.object,
  setMapRect: PropTypes.func,
  setMap: PropTypes.func,
  handleMapMove: PropTypes.func,
  handleMapInteraction: PropTypes.func,
  interactiveLayers: PropTypes.array,
  draw: PropTypes.bool,
  lat: PropTypes.number,
  lng: PropTypes.number,
  zoom: PropTypes.number
};

export default MapComponent;
