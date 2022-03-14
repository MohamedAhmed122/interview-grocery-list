/* eslint-disable curly */
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {
  AppNavigationType,
  AppParams,
  AppParamsList,
} from '@Navigation/interface';

import {RootState} from '@Redux/rootReducer';

import {changeStatus, deleteItemFromList} from '@Redux/services/grocery';

import {GroceryDetailView} from './components';

interface GroceryDetailProps {
  navigation: AppNavigationType;
  route: RouteProp<AppParamsList, AppParams.GroceryDetails>;
}

export const GroceryDetailScreen: React.FC<GroceryDetailProps> = ({
  navigation,
  route,
}) => {
  const {id} = route.params;

  const {groceryList} = useSelector((state: RootState) => state.grocery);
  const details = groceryList.find(list => list.id === id);

  const dispatch = useDispatch();

  if (!details) return null;

  const onGroceryDelete = () => {
    dispatch(deleteItemFromList(details.id));
    navigation.goBack();
  };

  const onGroceryEdit = () =>
    navigation.navigate(AppParams.GroceryTask, {data: details});

  const onToggleStatus = () => dispatch(changeStatus(details));

  return (
    <GroceryDetailView
      details={details}
      groceryDetailHeaderProps={{
        onToggleStatus,
        details,
      }}
      groceryDetailFooterProps={{
        onPressDelete: onGroceryDelete,
        onPressEdit: onGroceryEdit,
      }}
    />
  );
};
