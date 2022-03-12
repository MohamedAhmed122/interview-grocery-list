import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {AppParams, AppParamsList} from './interface';
//SCREENS
import {GroceryDetailScreen} from '@Screens/GroceryDetailScreen';
import {GroceryListScreen} from '@Screens/GroceryListScreen';
import {GroceryTasksScreen} from '@Screens/GroceryTasksScreen';
import {Header} from '@Shared/ui';

const Stack = createNativeStackNavigator<AppParamsList>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: Header,
      }}>
      <Stack.Screen
        name={AppParams.GroceryList}
        component={GroceryListScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={AppParams.GroceryDetails}
        component={GroceryDetailScreen}
      />
      <Stack.Screen
        name={AppParams.GroceryTask}
        component={GroceryTasksScreen}
      />
    </Stack.Navigator>
  );
};
