import React from 'react';
import {View} from 'react-native';

import {FilterType} from '@Shared/types';
import {Badge} from '@Shared/ui/badge';
import {styles} from './style';

interface GroceryHeaderProps {
  onFilter(value: FilterType): void;
}

export const GroceryHeader: React.FC<GroceryHeaderProps> = ({onFilter}) => {
  return (
    <>
      <View style={styles.container}>
        <Badge value="All" onPress={() => onFilter('ALL')} />
        <Badge value="Have" onPress={() => onFilter(1)} />
        <Badge value="Ran out" onPress={() => onFilter(0)} />
      </View>
    </>
  );
};
