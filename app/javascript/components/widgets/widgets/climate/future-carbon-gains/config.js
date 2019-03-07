export default {
  widget: 'futureCarbonGains',
  title: 'Potential tree biomass gain',
  categories: ['climate'],
  colors: 'climate',
  types: ['country'],
  admins: ['adm0'],
  options: {
    units: ['co2Gain', 'cGain']
  },
  // layers: ['fffa76d3-5008-48b7-afeb-2c7054548f2e'],
  metaKey: 'potential_tree_biomass_gain',
  sortOrder: {
    summary: 1,
    forestChange: 1,
    global: 1
  },
  sentences: {
    initial:
      'In {location}, potential carbon sequestration may reach {amount} of {variable} by {maxYear}.'
  },
  whitelists: {
    adm0: [
      'ARG',
      'BLZ',
      'BOL',
      'BRA',
      'COL',
      'CRI',
      'CUB',
      'ECU',
      'SLV',
      'GTM',
      'GUY',
      'HND',
      'JAM',
      'MEX',
      'NIC',
      'PAN',
      'PRY',
      'PER',
      'PRI',
      'SUR',
      'VEN'
    ]
  }
};
