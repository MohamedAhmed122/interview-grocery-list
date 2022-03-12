import React from 'react';
import {store} from '@Redux/store';
import {Provider} from 'react-redux';

export const withReduxProvider = (component: () => React.ReactNode) => () =>
  <Provider store={store}>{component()}</Provider>;
