import {StyleSheet} from 'react-native';
import {BACKGROUND_BUTTON, BORDER, WHITE} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 30,
  },
  inputLogin: {
    borderColor: BORDER,
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 14,
    fontWeight: '400',
  },
  buttonLogin: {
    backgroundColor: BACKGROUND_BUTTON,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
});
