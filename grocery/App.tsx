import React from 'react';
import {withProviders} from '@Shared/providers';
import {AppNavigation} from '@Navigation/index';

// TODO: Sort()

const App = () => {
  return <AppNavigation />;
};

export default withProviders(App);
