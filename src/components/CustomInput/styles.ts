import {WHITE} from '@assets/colors';
import {Dimensions, Platform, StyleSheet} from 'react-native';

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
    top: Platform.OS === 'ios' ? 18 : 14,
    color: '#aaa',
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 12,
    fontSize: 14,
    paddingHorizontal: 3,
  },
  error: {
    color: '#EC6758',
    marginBottom: 10,
  },

  borderErrorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
  viewErrorText: {
    paddingHorizontal: 10,
    marginTop: 6,
    width: Dimensions.get('screen').width - 60,
  },
});
