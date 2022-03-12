import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@Shared/styles';

const {width, height} = Dimensions.get('window');
export const Empty: React.FC<{msg?: string}> = ({
  msg = 'The Current List is Empty',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{msg}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width,
    height: height - 200,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
