export * from './History';
export * from './GroceryDetailHeader';
export * from './GroceryDetailFooter';

import {GroceryList} from '@Shared/types';
import {ScreenLayout} from '@Shared/ui';
import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {
  GroceryDetailFooter,
  GroceryDetailFooterProps,
} from './GroceryDetailFooter';
import {
  GroceryDetailHeader,
  GroceryDetailHeaderProps,
} from './GroceryDetailHeader';
import {History} from './History';

interface GroceryDetailViewProps {
  details: GroceryList;
  groceryDetailHeaderProps: GroceryDetailHeaderProps;
  groceryDetailFooterProps: GroceryDetailFooterProps;
}

export const GroceryDetailView: React.FC<GroceryDetailViewProps> = ({
  details,
  groceryDetailHeaderProps,
  groceryDetailFooterProps,
}) => {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <GroceryDetailHeader {...groceryDetailHeaderProps} />
          }
          data={details.history}
          renderItem={({item}) => <History data={item} title={details.title} />}
          keyExtractor={key => String(key.date)}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <GroceryDetailFooter {...groceryDetailFooterProps} />
          }
        />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
});
