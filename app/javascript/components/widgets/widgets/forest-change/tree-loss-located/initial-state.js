export default {
  title: 'Location of tree cover loss',
  config: {
    size: 'small',
    forestTypes: ['ifl_2013', 'plantations', 'primary_forest'],
    landCategories: ['mining', 'wdpa', 'landmark'],
    units: ['ha', '%'],
    categories: ['summary', 'forest-change'],
    admins: ['country', 'region'],
    selectors: [
      'forestTypes',
      'landCategories',
      'thresholds',
      'units',
      'startYears',
      'endYears',
      'extentYears'
    ],
    locationCheck: true,
    type: 'loss',
    layers: ['loss'],
    metaKey: 'widget_tree_cover_loss_location',
    sortOrder: {
      summary: 2,
      forestChange: 2
    },
    sentences: {
      initial:
        'In {location}, the top {percentileLength} regions were responsible for {topLoss} of all tree cover loss between {startYear} and {endYear}. {region} had the most tree cover loss at {value} compared to an average of {average}.',
      withIndicator:
        'For {indicator} in {location}, the top {percentileLength} regions were responsible for {topLoss} of all tree cover loss between {startYear} and {endYear}. {region} had the most tree cover loss at {value} compared to an average of {average}.',
      initialPercent:
        'In {location}, the top {percentileLength} regions were responsible for {topLoss} of all tree cover loss between {startYear} and {endYear}. {region} had the most relative tree cover loss at {value} compared to an average of {average}.',
      withIndicatorPercent:
        'For {indicator} in {location}, the top {percentileLength} regions were responsible for {topLoss} of all tree cover loss between {startYear} and {endYear}. {region} had the most relative tree cover loss at {value} compared to an average of {average}.'
    }
  },
  settings: {
    threshold: 30,
    extentYear: 2000,
    unit: '%',
    pageSize: 5,
    page: 0,
    startYear: 2001,
    endYear: 2016,
    layers: ['loss']
  },
  enabled: true
};