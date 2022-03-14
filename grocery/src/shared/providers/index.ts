import compose from 'compose-function';

import {withNavigationContainer} from './with-navigation-container';
import {withPersistGate} from './with-persist-gate';
import {withReduxProvider} from './with-redux-provider';

export const withProviders = compose(
  withNavigationContainer,
  withPersistGate,
  withReduxProvider,
);
