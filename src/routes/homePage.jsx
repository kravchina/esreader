import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import withTitle from '../components/HOCs/withTitle';
import withHeader from '../components/HOCs/withHeader';
import routes from '../constants/routes';

const EnhancedComponent = withTitle(routes.homePage.title, withHeader(HomePage));

export default () => (
  <Route
    exact
    path={routes.homePage.url}
    component={EnhancedComponent}
  />
)