import {COLORS} from './../../../../shared/styles/index';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginVertical: 12,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
  },
  point: {
    backgroundColor: COLORS.brand.green,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  date: {
    marginLeft: 10,
  },
});
