import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'reduxjs-toolkit-persist';
import {combineReducers} from '@reduxjs/toolkit';

import groceryReducer from './services/grocery/reducers';

const reducers = combineReducers({
  grocery: groceryReducer,
});

const persistConfig = {
  key: 'RootApp-11',
  storage: AsyncStorage,
  whiteList: ['grocery'],
};

export const persistedReducer = persistReducer(persistConfig, reducers);

export type RootState = ReturnType<typeof reducers>;
