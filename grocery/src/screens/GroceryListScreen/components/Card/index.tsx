import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {GroceryList} from '@Shared/types';
import {getStatusValue} from '@Shared/utils';
import {Badge} from '@Shared/ui/badge';
import {COLORS} from '@Shared/styles';
import {styles} from './style';

interface CardProps {
  item: GroceryList;
  onBadgePress(): void;
  onPress(): void;
  onDeleteGrocery(): void;
}

export const Card: React.FC<CardProps> = ({
  item,
  onBadgePress,
  onPress,
  onDeleteGrocery,
}) => {
  const {title, priority, status} = item;
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.cardTopContainer}>
          <Icon name={'palm-tree'} color={COLORS.brand.green} size={34} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={[styles.priority, styles.title]}>{priority}</Text>
      </TouchableOpacity>
      <View style={styles.badgeContainer}>
        <Badge value={getStatusValue(status)} onPress={onBadgePress} />
      </View>
      <View style={styles.deleteContainer}>
        <IconContainer onPress={onDeleteGrocery} />
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
