import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import store from '../../store';
import Routes from '../../routes';

const history = createHistory();

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes history={history} />
    </BrowserRouter>
  </Provider>
);
