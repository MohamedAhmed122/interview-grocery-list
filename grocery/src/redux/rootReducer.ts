import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'reduxjs-toolkit-persist';
import {combineReducers} from '@reduxjs/toolkit';

import countReducer from './services';

const reducers = combineReducers({
  count: countReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['count'],
};

export const persistedReducer = persistReducer(persistConfig, reducers);
