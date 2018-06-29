export const initialState = {
  selectedSection: null,
  countries: null
};

const setSelectedSection = (state, { payload }) => ({
  ...state,
  selectedSection: state.selectedSection === payload ? null : payload
});

const setMenuCountries = (state, { payload }) => ({
  ...state,
  countries: {
    ...state.countries,
    ...payload
  }
});

export default {
  setSelectedSection,
  setMenuCountries
};
