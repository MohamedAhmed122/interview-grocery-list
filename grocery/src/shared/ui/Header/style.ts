import {StyleSheet} from 'react-native';
import {COLORS} from '@Shared/styles';

const BAR_HEIGHT = 96;

export const styles = StyleSheet.create({
  container: {
    height: BAR_HEIGHT,
    backgroundColor: COLORS.white,
  },
  icon: {
    marginLeft: 20,
    marginTop: BAR_HEIGHT / 2,
  },
});
