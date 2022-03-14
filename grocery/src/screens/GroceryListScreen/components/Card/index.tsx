import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {GroceryList} from '@Shared/types';
import {getStatusValue} from '@Shared/utils';
import {Badge} from '@Shared/ui/badge';
import {COLORS} from '@Shared/styles';
import {styles} from './style';

export interface CardProps {
  item: GroceryList;
  onChangeBadgeStatus(item: GroceryList): void;
  onNavigateToGroceryDetails(item: GroceryList): void;
  onDeleteGrocery(id: string): void;
}

export const Card: React.FC<CardProps> = ({
  item,
  onChangeBadgeStatus,
  onNavigateToGroceryDetails,
  onDeleteGrocery,
}) => {
  const {title, priority, status, id} = item;
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => onNavigateToGroceryDetails(item)}>
        <View style={styles.cardTopContainer}>
          <Icon name={'palm-tree'} color={COLORS.brand.green} size={34} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={[styles.priority, styles.title]}>{priority}</Text>
      </TouchableOpacity>
      <View style={styles.badgeContainer}>
        <Badge
          value={getStatusValue(status)}
          onPress={() => onChangeBadgeStatus(item)}
        />
      </View>
      <View style={styles.deleteContainer}>
        <IconContainer onPress={() => onDeleteGrocery(id)} />
      </View>
    </View>
  );
};

const IconContainer: React.FC<{onPress(): void}> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      <Icon name={'trash-can-outline'} color={COLORS.lightRed} size={28} />
    </TouchableOpacity>
  );
};
