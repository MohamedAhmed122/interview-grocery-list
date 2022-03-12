import React, {useEffect, useState} from 'react';
import {AppNavigationType, AppParams} from '@Navigation/interface';
import {CustomButton, ScreenLayout} from '@Shared/ui';

import {FlatList} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@Redux/rootReducer';
import {FilterType, GroceryList} from '@Shared/types';
import {
  changeStatus,
  deleteItemFromList,
  filterGrocery,
} from '@Redux/services/grocery';
import {GroceryHeader, Card} from './components';
import {Empty} from '@Shared/ui/Empty';
import {sortArrayOfObjects} from '@Shared/utils';

interface GroceryListProps {
  navigation: AppNavigationType;
}

export const GroceryListScreen: React.FC<GroceryListProps> = ({navigation}) => {
  const {groceryList} = useSelector((state: RootState) => state.grocery);
  const [isChangedStatus, setIsChangedStatus] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<FilterType>();

  const dispatch = useDispatch();

  const onChangeBadgeStatus = (item: GroceryList) => {
    dispatch(changeStatus(item));
    setIsChangedStatus(true);
  };

  const onFilterGroceries = (status: FilterType) => {
    dispatch(filterGrocery(status));
    setCurrentStatus(status);
    setIsChangedStatus(false);
  };

  useEffect(() => {
    currentStatus && onFilterGroceries(currentStatus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStatus, isChangedStatus]);

  const onNavigateToGroceryDetails = (item: GroceryList) =>
    navigation.navigate(AppParams.GroceryDetails, {id: item.id});

  const onDeleteGrocery = (id: string) => dispatch(deleteItemFromList(id));

  const onNavigationToGroceryTask = () =>
    navigation.navigate(AppParams.GroceryTask, {data: undefined});

  const sortGrocery = sortArrayOfObjects(groceryList, 'priority', 'ascending');

  return (
    <ScreenLayout>
      <FlatList
        ListHeaderComponent={() => (
          <GroceryHeader onFilter={onFilterGroceries} />
        )}
        showsVerticalScrollIndicator={false}
        data={sortGrocery}
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
      <CustomButton title="Add Grocery" onPress={onNavigationToGroceryTask} />
    </ScreenLayout>
  );
};
