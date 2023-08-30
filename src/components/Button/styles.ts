import {StyleSheet} from 'react-native';
import {BACKGROUND_BUTTON, WHITE} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_BUTTON,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
});
