import {WHITE} from '@assets/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  buttonEye: {position: 'absolute', right: 4, top: 8},

  labelFocused: {
    top: -7,
    color: '#000',
    backgroundColor: WHITE,
    position: 'absolute',
    left: 12,
    fontSize: 14,
    paddingHorizontal: 3,
  },

  labelBlur: {
    top: 18,
    color: '#aaa',
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 12,
    fontSize: 14,
    paddingHorizontal: 3,
  },
});
