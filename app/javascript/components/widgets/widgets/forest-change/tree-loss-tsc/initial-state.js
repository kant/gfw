export default {
  title: {
    withLocation: 'Annual tree cover loss by driver in {location}',
    global: 'Global annual tree cover loss by driver'
  },
  config: {
    admins: ['global', 'country'],
    selectors: ['threshold', 'extentYears', 'startYears', 'endYears'],
    sentences: {
      initial:
        "Between {startYear} and {endYear}, {location} lost {loss} of tree cover loss. This loss is equal to {percent} of the area's tree cover in {extentYear}, and equivalent to {emissions} of CO\u2082 emissions."
    }
  },
  enabled: true,
  clearable: false
};