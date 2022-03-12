import React from 'react';
import {withProviders} from '@Shared/providers';
import {AppNavigation} from '@Navigation/index';

const App = () => {
  return <AppNavigation />;
};

export default withProviders(App);
