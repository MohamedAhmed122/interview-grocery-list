import React from 'react';
import {AppNavigationType, AppParams} from '@Navigation/interface';
import {ScreenLayout} from '@Shared/ui';

import {FlatList} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@Redux/store';
import {FilterType, GroceryList} from '@Shared/types';
import {
  changeStatus,
  deleteItemFromList,
  filterGrocery,
} from '@Redux/services/grocery';
import {GroceryHeader, Card} from './components';
import {Empty} from '@Shared/ui/Empty';

interface GroceryListProps {
  navigation: AppNavigationType;
}

export const GroceryListScreen: React.FC<GroceryListProps> = ({navigation}) => {
  const {groceryList} = useSelector((state: RootState) => state.grocery);

  const dispatch = useDispatch();

  const onChangeBadgeStatus = (item: GroceryList) => {
    console.log('Here From onChangeBadgeStatus', item);
    dispatch(changeStatus(item));
  };

  const onFilterGroceries = (status: FilterType) =>
    dispatch(filterGrocery(status));

  const onNavigateToGroceryDetails = (item: GroceryList) =>
    navigation.navigate(AppParams.GroceryDetails, {id: item.id});

  const onDeleteGrocery = (id: string) => dispatch(deleteItemFromList(id));

  console.log(groceryList);

  return (
    <ScreenLayout>
      <FlatList
        ListHeaderComponent={() => (
          <GroceryHeader onFilter={onFilterGroceries} />
        )}
        showsVerticalScrollIndicator={false}
        data={groceryList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card
            item={item}
            onPress={() => onNavigateToGroceryDetails(item)}
            onBadgePress={() => onChangeBadgeStatus(item)}
            onDeleteGrocery={() => onDeleteGrocery(item.id)}
          />
        )}
        ListEmptyComponent={Empty}
      />
    </ScreenLayout>
  );
};
