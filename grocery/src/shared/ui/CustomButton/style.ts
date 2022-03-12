import {COLORS} from '@Shared/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 13,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    color: COLORS.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
