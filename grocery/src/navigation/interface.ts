import {StackNavigationProp} from '@react-navigation/stack';
import {GroceryList as GroceryListType} from '@Shared/types';

export type NO_PARAMS = undefined;

export enum AppParams {
  GroceryList = 'GroceryList',
  GroceryDetails = 'GroceryDetails',
  GroceryTask = 'Grocery',
}

export type AppParamsList = {
  [AppParams.GroceryList]: NO_PARAMS;
  [AppParams.GroceryDetails]: {id: string};
  [AppParams.GroceryTask]: {data: GroceryListType | undefined};
};
export type AppNavigationType = StackNavigationProp<AppParamsList, AppParams>;
