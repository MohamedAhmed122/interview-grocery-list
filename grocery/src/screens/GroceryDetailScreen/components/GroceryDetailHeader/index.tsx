import React from 'react';
import {Text, View} from 'react-native';

import {GroceryList} from '@Shared/types';
import {Badge} from '@Shared/ui';

import {styles} from './style';

export interface GroceryDetailHeaderProps {
  details: GroceryList;
  onToggleStatus(): void;
}

export const GroceryDetailHeader: React.FC<GroceryDetailHeaderProps> = ({
  details,
  onToggleStatus,
}) => {
  const {title, priority, status} = details;
  return (
    <>
      <Text style={styles.title}> Grocery name is {title}</Text>
      <Text style={styles.title}> Priority is {priority}</Text>
      <View style={styles.row}>
        <Badge
          value={status === 0 ? 'Ran out' : 'Have'}
          onPress={onToggleStatus}
        />
      </View>
    </>
  );
};
