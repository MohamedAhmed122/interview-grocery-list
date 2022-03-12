import React from 'react';
import {View} from 'react-native';
import {CustomButton} from '@Shared/ui';
import {styles} from './style';

export const GroceryDetailFooter: React.FC<{
  onPressDelete(): void;
  onPressEdit(): void;
}> = ({onPressDelete, onPressEdit}) => {
  return (
    <View style={styles.buttonContainer}>
      <CustomButton onPress={onPressEdit} title="Edit" style={styles.button} />

      <CustomButton
        onPress={onPressDelete}
        title="Delete"
        style={styles.button}
      />
    </View>
  );
};
