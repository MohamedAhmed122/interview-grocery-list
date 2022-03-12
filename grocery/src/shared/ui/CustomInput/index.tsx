import React from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {styles} from './style';

interface Props extends TextInputProps {
  inputContainerStyle?: StyleProp<ViewStyle>;
  LeftIcon?: React.FC;
  RightIcon?: React.FC;
}

export const CustomInput: React.FC<Props> = ({
  inputContainerStyle,
  LeftIcon,
  RightIcon,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, inputContainerStyle]}>
      {LeftIcon && (
        <TouchableOpacity style={styles.leftIconContainer}>
          <LeftIcon />
        </TouchableOpacity>
      )}
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputText}
        {...otherProps}
      />
      {RightIcon && (
        <TouchableOpacity style={styles.rightIconContainer}>
          <RightIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};
