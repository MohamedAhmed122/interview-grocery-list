import {COLORS} from '@Shared/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.veryLightAccent,
    alignSelf: 'center',
    width: '90%',
    borderRadius: 14,
    marginVertical: 24,
  },
  cardTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  title: {
    fontSize: 24,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  priority: {
    padding: 12,
    alignSelf: 'flex-end',
  },
  badgeContainer: {
    position: 'absolute',
    left: 40,
    top: 82,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteContainer: {
    position: 'absolute',
    right: '7%',
    top: 35,
  },
});
