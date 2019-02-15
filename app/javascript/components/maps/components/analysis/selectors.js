import { createSelector, createStructuredSelector } from 'reselect';
import compact from 'lodash/compact';
import groupBy from 'lodash/groupBy';
import flatMap from 'lodash/flatMap';

import {
  getAllBoundaries,
  getActiveBoundaryDatasets,
  getAllLayers,
  getWidgetsWithLayerParams
} from 'components/maps/map/selectors';

import layersIcon from 'assets/icons/layers.svg';
import analysisIcon from 'assets/icons/analysis.svg';

import { initialState } from './reducers';

const selectAnalysisUrlState = state =>
  state.location && state.location.query && state.location.query.analysis;
const selectAnalysisLoading = state => state.analysis && state.analysis.loading;
const selectDatasetsLoading = state => state.datasets && state.datasets.loading;
const selectGeostoreLoading = state => state.geostore && state.geostore.loading;
const selectDrawLoading = state => state.draw && state.draw.loading;
const selectLocation = state => state.location && state.location.payload;
const selectAnalysisLocation = state =>
  state.analysis && state.analysis.location;
const selectEmbed = state =>
  state.location &&
  state.location.pathname &&
  state.location.pathname.includes('/embed');
const selectError = state => state.analysis && state.analysis.error;

export const getLoading = createSelector(
  [
    selectAnalysisLoading,
    selectDatasetsLoading,
    selectGeostoreLoading,
    selectDrawLoading
  ],
  (analysisLoading, datasetsLoading, geostoreLoading, drawLoading) =>
    analysisLoading || datasetsLoading || geostoreLoading || drawLoading
);

export const getAnalysisSettings = createSelector(
  [selectAnalysisUrlState],
  urlState => ({
    ...initialState.settings,
    ...urlState
  })
);

export const getShowAnalysis = createSelector(
  getAnalysisSettings,
  settings => settings.showAnalysis
);

export const getHidden = createSelector(
  getAnalysisSettings,
  settings => settings.hidden
);

export const getShowDraw = createSelector(
  getAnalysisSettings,
  settings => settings.showDraw
);

export const getWidgetLayers = createSelector(
  getWidgetsWithLayerParams,
  widgets => {
    const activeWidgets =
      widgets &&
      widgets.filter(
        w => w.config.analysis && w.config.layers && w.config.layers.length
      );
    return activeWidgets && flatMap(activeWidgets.map(w => w.config.layers));
  }
);

export const getLayerEndpoints = createSelector(
  [getAllLayers, selectLocation, getWidgetLayers],
  (layers, location, widgetLayers) => {
    if (!layers || !layers.length) return null;
    const { type, adm2 } = location;
    const routeType = type === 'country' ? 'admin' : type;
    const lossLayer = layers.find(l => l.metadata === 'tree_cover_loss');
    const hasWidgetLayers = widgetLayers && !!widgetLayers.length;
    const endpoints = compact(
      layers
        .filter(
          l =>
            l.analysisConfig &&
            (!hasWidgetLayers || !widgetLayers.includes(l.id))
        )
        .map(l => {
          const analysisConfig =
            l.analysisConfig.find(
              a =>
                a.type === routeType ||
                ((routeType === 'use' || routeType === 'wdpa') &&
                  a.type === 'geostore')
            ) || {};
          const { params, decodeParams } = l;

          return {
            name: l.name,
            version: analysisConfig.version || 'v1',
            slug: analysisConfig.service,
            params: {
              ...(analysisConfig.service === 'umd-loss-gain' &&
                lossLayer && {
                  ...lossLayer.decodeParams
                }),
              ...decodeParams,
              ...params,
              query: analysisConfig.query
            }
          };
        })
    );

    const groupedEndpoints = groupBy(endpoints, 'slug');
    const parsedEndpoints = Object.keys(groupedEndpoints).filter(slug => slug !== 'undefined').map(slug => {
      let params = {};
      groupedEndpoints[slug].forEach(e => {
        params = {
          ...params,
          ...e.params
        };
      });

      return {
        slug,
        params,
        version: groupedEndpoints[slug][0].version,
        name: groupedEndpoints[slug][0].name
      };
    });

    return adm2
      ? parsedEndpoints.filter(e => !e.slug.includes('forma'))
      : parsedEndpoints;
  }
);

export const getMenuLinks = createSelector([getShowAnalysis], showAnalysis => [
  {
    label: 'DATA',
    icon: layersIcon,
    active: !showAnalysis,
    showAnalysis: false
  },
  {
    label: 'ANALYSIS',
    icon: analysisIcon,
    active: showAnalysis,
    showAnalysis: true
  }
]);

export const getAnalysisProps = createStructuredSelector({
  showAnalysis: getShowAnalysis,
  endpoints: getLayerEndpoints,
  loading: getLoading,
  error: selectError,
  links: getMenuLinks,
  boundaries: getAllBoundaries,
  activeBoundary: getActiveBoundaryDatasets,
  location: selectLocation,
  hidden: getHidden,
  embed: selectEmbed,
  widgetLayers: getWidgetLayers,
  analysisLocation: selectAnalysisLocation
});
