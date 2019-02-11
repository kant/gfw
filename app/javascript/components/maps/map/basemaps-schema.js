import defaultImage from './images/default.png';
import darkImage from './images/dark.png';
import landsatImage from './images/landsat.png';
import satelliteImage from './images/satellite.png';

const { MAPBOX_TOKEN } = process.env;

export const labels = {
  default: {
    value: 'default',
    label: 'Dark Labels',
    url: `https://api.mapbox.com/styles/v1/resourcewatch/cjlhxwcp212u02rpd1o541omv/tiles/256/{z}/{x}/{y}@2x?access_token=${
      MAPBOX_TOKEN
    }`
  },
  lightLabels: {
    value: 'lightLabels',
    label: 'Light Labels',
    url: `https://api.mapbox.com/styles/v1/resourcewatch/cjlhxw8t412tv2rpdt33iuum3/tiles/256/{z}/{x}/{y}@2x?access_token=${
      MAPBOX_TOKEN
    }`
  },
  noLabels: {
    label: 'No Labels',
    value: 'noLabels',
    url: ''
  }
};

export default {
  default: {
    value: 'default',
    label: 'default',
    labelsKey: 'default',
    color: '#A2DFFF',
    image: defaultImage,
    url: 'mapbox://styles/resourcewatch/cjlhwaoh211hp2stemfz0imqf'
  },
  dark: {
    value: 'dark',
    label: 'dark matter',
    labelsKey: 'lightLabels',
    color: '#31312F',
    image: darkImage,
    url: 'mapbox://styles/resourcewatch/cjlhtst4i0m7e2rmijubkv4y9'
  },
  satellite: {
    value: 'satellite',
    label: 'Satellite',
    labelsKey: 'lightLabels',
    color: '#131620',
    image: satelliteImage,
    url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
  },
  landsat: {
    value: 'landsat',
    label: 'landsat',
    labelsKey: 'lightLabels',
    dynamic: true,
    color: '#0C0045',
    image: landsatImage,
    url: 'https://storage.googleapis.com/landsat-cache/{year}/{z}/{x}/{y}.png',
    availableYears: [2017, 2016, 2015, 2014, 2013]
  }
};
