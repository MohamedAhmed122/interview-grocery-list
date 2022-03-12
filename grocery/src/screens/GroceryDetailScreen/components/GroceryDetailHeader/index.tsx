import React from 'react';
import {Text, View} from 'react-native';

import {PriorityType, StatusType} from '@Shared/types';
import {Badge} from '@Shared/ui';

import {styles} from './style';

export const GroceryDetailHeader: React.FC<{
  title: string;
  priority: PriorityType;
  status: StatusType;
  onToggleStatus(): void;
}> = ({title, priority, status, onToggleStatus}) => {
  console.log(status, 'ss');
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
