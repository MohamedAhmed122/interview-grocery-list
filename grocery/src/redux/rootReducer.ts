import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'reduxjs-toolkit-persist';
import {combineReducers} from '@reduxjs/toolkit';

import countReducer from './services';
import groceryReducer from './services/grocery/reducers';

const reducers = combineReducers({
  count: countReducer,
  grocery: groceryReducer,
});

const persistConfig = {
  key: 'RootApp',
  storage: AsyncStorage,
  whiteList: ['count'],
};

export const persistedReducer = persistReducer(persistConfig, reducers);

export type RootState = ReturnType<typeof reducers>;
