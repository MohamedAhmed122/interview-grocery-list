import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';

interface PickerItemProps {
  label: string;
  color: string;
  onPress(): void;
}

export const PickerItem: React.FC<PickerItemProps> = ({
  label,
  color,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.pickerContainer, {backgroundColor: color}]}>
        {/* <Icon name={icon} size={30} color="white" /> */}
        <Text style={styles.PickerText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
