import {StyleSheet} from 'react-native';
import {COLORS} from '@Shared/styles';

export const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginLeft: '2.5%',
    backgroundColor: COLORS.lightGrey,
    height: 50,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  leftIconContainer: {
    marginLeft: 15,
  },
  inputText: {
    backgroundColor: 'transparent',
    width: 'auto',
    marginLeft: 10,
    color: COLORS.dark,
    fontSize: 18,
    flex: 1,
  },
  rightIconContainer: {
    marginRight: 15,
  },
});
