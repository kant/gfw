import request from 'utils/request';

const REQUEST_URL = `${process.env.GFW_API}/v3`;

const QUERIES = {
  umdGeostore:
    '/umd-loss-gain?geostore={geostoreId}&period=2001-01-01%2C2017-12-31&thresh=30',
  umdAdmin:
    '/umd-loss-gain/admin/{location}?period=2001-01-01%2C2017-12-31&thresh=30'
};

const getLocationUrl = ({ country, region, subRegion }) =>
  `${country}${region ? `/${region}` : ''}${subRegion ? `/${subRegion}` : ''}`;

export const fetchUmdLossGainGeostore = ({ country }) => {
  const url = `${REQUEST_URL}${QUERIES.umdGeostore}`.replace(
    '{geostoreId}',
    country
  );
  return request.get(url);
};

export const fetchUmdLossGainAdmin = location => {
  const url = `${REQUEST_URL}${QUERIES.umdAdmin}`.replace(
    '{location}',
    getLocationUrl(location)
  );
  return request.get(url);
};
