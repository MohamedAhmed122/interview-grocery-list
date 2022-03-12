import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum AppParams {
  GroceryList = 'GroceryList',
  GroceryDetails = 'GroceryDetails',
  GroceryTask = 'Grocery',
}

export type AppParamsList = {
  [AppParams.GroceryList]: NO_PARAMS;
  [AppParams.GroceryDetails]: {id: string};
  [AppParams.GroceryTask]: NO_PARAMS;
};
export type AppNavigationType = StackNavigationProp<AppParamsList, AppParams>;
