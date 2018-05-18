export const initialState = {
  title: 'Tree cover loss',
  config: {
    size: 'large',
    forestTypes: ['ifl_2013', 'primary_forest'],
    landCategories: ['mining', 'wdpa', 'landmark'],
    categories: ['summary', 'forest-change'],
    admins: ['country', 'region', 'subRegion'],
    selectors: [
      'forestTypes',
      'landCategories',
      'startYears',
      'endYears',
      'thresholds',
      'extentYears'
    ],
    type: 'loss',
    metaKey: 'widget_tree_cover_loss',
    layers: ['loss'],
    sortOrder: {
      summary: 1,
      forestChange: 1
    },
    sentences: {
      initial:
        'From {startYear} and {endYear}, {location} lost {loss} of tree cover, equivalent to a {percent} decrease since {extentYear} and {emissions} of CO\u2082 emissions.',
      withIndicator:
        'From {startYear} and {endYear}, {location} lost {loss} of tree cover in {indicator}, equivalent to a {percent} decrease since {extentYear} and {emissions} of CO\u2082 emissions.',
      noLoss:
        'From {startYear} and {endYear}, {location} lost {loss} of tree cover.',
      noLossWithIndicator:
        'From {startYear} and {endYear}, {location} lost {loss} of tree cover in {indicator}.'
    }
  },
  settings: {
    threshold: 30,
    startYear: 2001,
    endYear: 2016,
    extentYear: 2000,
    layers: ['loss']
  },
  enabled: true
};