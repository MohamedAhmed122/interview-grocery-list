import {COLORS} from '@Shared/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: COLORS.pinky,
    width: '89%',
    alignSelf: 'center',
    borderRadius: 25,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    marginTop: 25,

    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  PickerText: {
    marginHorizontal: 10,
  },
});
