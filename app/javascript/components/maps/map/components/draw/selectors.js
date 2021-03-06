import { createStructuredSelector } from 'reselect';

export const selectDrawPolygon = state => state.draw && state.draw.geostoreId;

export const getDrawProps = createStructuredSelector({
  geostoreId: selectDrawPolygon
});
