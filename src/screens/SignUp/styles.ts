import {PRIMARY, WHITE} from '@assets/colors';
import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  inputLogin: {
    borderRadius: 50,
    backgroundColor: '#ECEDEF',
    width: Dimensions.get('screen').width - 60,
    paddingHorizontal: 16,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLogin: {
    backgroundColor: '#EC6758',
    borderRadius: 50,
    paddingVertical: 14,
    marginTop: 10,
  },
  titleButtonLogin: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
  viewButtonSocial: {
    width: Dimensions.get('screen').width - 60,
    justifyContent: 'space-between',
  },
  buttonSocial: {
    backgroundColor: PRIMARY,
    width: '43%',
    borderRadius: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  textUnderline: {
    textDecorationLine: 'underline',
    color: 'gray',
  },
});
