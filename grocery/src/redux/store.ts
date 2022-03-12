import {createStore} from '@reduxjs/toolkit';
import {persistStore} from 'reduxjs-toolkit-persist';
import {persistedReducer} from './rootReducer';

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
