import React from 'react';
import {PersistGate} from 'reduxjs-toolkit-persist/integration/react';
import {persistor} from '@Redux/store';

export const withPersistGate = (component: () => React.ReactNode) => () =>
  <PersistGate persistor={persistor}>{component()}</PersistGate>;
