import {StyleProp, Text, ViewStyle} from 'react-native';
import React from 'react';
import {PressableScale} from '../PressableScale';
import {COLORS} from '@Shared/styles';
import {styles} from './style';

export interface CustomButtonProps {
  title: string;
  color?: string;
  onPress(): void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  color = COLORS.brand.lightGreen,
  onPress,
  disabled,
  style,
}) => {
  return (
    <PressableScale
      activeScale={0.9}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        {
          backgroundColor: disabled ? COLORS.grey : color,
        },
        style,
      ]}>
      <Text style={styles.text}>{title}</Text>
    </PressableScale>
  );
};
