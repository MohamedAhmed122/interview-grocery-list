import React from 'react';
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ViewStyle,
} from 'react-native';

import {COLORS} from '@Shared/styles';
import {styles} from './style';

export interface BadgeProps
  extends Omit<TouchableOpacityProps, 'style' | 'onPress'> {
  color?: string;
  value: string;
  onPress?(): void;
  style?: StyleProp<ViewStyle>;
}

export const Badge: React.FC<BadgeProps> = ({
  color = COLORS.brand.green,
  value,
  onPress,

  style,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}, style]}
      {...otherProps}>
      <Text>{value}</Text>
    </TouchableOpacity>
  );
};
