import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {AppNavigationType, AppParams} from '@Navigation/interface';

import {RootState} from '@Redux/rootReducer';
import {deleteItemFromList} from '@Redux/services/grocery';

import {sortArrayOfObjects} from '@Shared/utils';
import {useFilterGrocery} from '@Shared/hooks';
import {GroceryList} from '@Shared/types';

import {GroceryListView} from './components';

interface GroceryListProps {
  navigation: AppNavigationType;
}

export const GroceryListScreen: React.FC<GroceryListProps> = ({navigation}) => {
  const {groceryList} = useSelector((state: RootState) => state.grocery);

  const dispatch = useDispatch();

  const {onChangeBadgeStatus, onFilterGroceries} = useFilterGrocery();

  const onNavigateToGroceryDetails = (item: GroceryList) =>
    navigation.navigate(AppParams.GroceryDetails, {id: item.id});

  const onDeleteGrocery = (id: string) => dispatch(deleteItemFromList(id));

  const onNavigationToGroceryTask = () =>
    navigation.navigate(AppParams.GroceryTask, {data: undefined});

  const sortGrocery = sortArrayOfObjects(groceryList, 'priority', 'title');

  return (
    <GroceryListView
      onFilterGroceries={onFilterGroceries}
      sortGrocery={sortGrocery}
      onNavigationToGroceryTask={onNavigationToGroceryTask}
      groceryCardProps={{
        onNavigateToGroceryDetails,
        onChangeBadgeStatus,
        onDeleteGrocery,
      }}
    />
  );
};
