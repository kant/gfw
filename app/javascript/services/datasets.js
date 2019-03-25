import request from 'utils/request';

const REQUEST_URL = `${process.env.RESOURCE_WATCH_API}`;
const featureEnv = process.env.FEATURE_ENV;

export const getDatasetsProvider = () =>
  request.get(
    `${
      REQUEST_URL
    }/dataset?application=gfw&includes=metadata,vocabulary,layer&page[size]=9999&env=production${
      featureEnv ? `,${featureEnv}` : ''
    }&hash=${process.env.API_CACHE || new Date()}`
  );
