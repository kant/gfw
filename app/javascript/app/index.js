import 'babel-polyfill';
// es6 shim for .finally() in promises
import finallyShim from 'promise.prototype.finally';
import React from 'react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import configureStore from './store';
import Root from './layouts/root';

finallyShim.shim();

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <HelmetProvider>
      <Root />
    </HelmetProvider>
  </Provider>
);

export default App;
