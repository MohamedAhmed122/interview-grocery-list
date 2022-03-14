import React from 'react';
import {FlatList} from 'react-native';

import {FilterType, GroceryList} from '@Shared/types';
import {CustomButton, ScreenLayout} from '@Shared/ui';
import {Empty} from '@Shared/ui/Empty';
import {Card, CardProps} from './Card';
import {GroceryHeader} from './GroceryHeader';

interface GroceryListProps {
  groceryCardProps: Omit<CardProps, 'item'>;
  sortGrocery: GroceryList[];
  onFilterGroceries(status: FilterType): void;
  onNavigationToGroceryTask(): void;
}

export const GroceryListView: React.FC<GroceryListProps> = ({
  groceryCardProps,
  sortGrocery,
  onFilterGroceries,
  onNavigationToGroceryTask,
}) => {
  return (
    <ScreenLayout>
      <FlatList
        ListHeaderComponent={() => (
          <GroceryHeader onFilter={onFilterGroceries} />
        )}
        showsVerticalScrollIndicator={false}
        data={sortGrocery}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Card item={item} {...groceryCardProps} />}
        ListEmptyComponent={Empty}
      />
      <CustomButton title="Add Grocery" onPress={onNavigationToGroceryTask} />
    </ScreenLayout>
  );
};
