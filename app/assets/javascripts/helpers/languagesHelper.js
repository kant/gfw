define([], function() {

  /**
  * List of the key languages of the platform
  */

  var languageList = {
    en: 'English',
    zh: '中文',
    fr: 'Français',
    id: 'Bahasa Indonesia',
    pt_BR: 'Português (Brasil)',
    es_MX: 'Español (Mexico)'
  };

  var languagesHelper = {

    /**
     * Returns the list of key languages
     * @returns {Object} key languages list
     */
    getList: function() {
      return languageList;
    },

    /**
     * Returns a list of the key languages
     * with the selected option passed by param
     * @param {string} selected language
     * @returns {Array} list of languages with selection
     */
    getListSelected: function(selectedLanguage) {
      var langList = [];

      for (var lang in languageList) {
        langList.push({
          key: lang,
          name: languageList[lang],
          selected: lang === selectedLanguage ? 'selected' : ''
        });
      }
      return langList;
    }
  }
  return languagesHelper;

});
