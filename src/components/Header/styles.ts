import {StyleSheet} from 'react-native';
import {WHITE} from '@assets/colors';
import {checkPlatform} from '@utils/func';

export default StyleSheet.create({
  containerHeader: {
    height: checkPlatform('ios') ? 90 : 50,
    borderColor: '#D9D9D9D9',
    borderWidth: 1,
    backgroundColor: WHITE,
  },
  containerBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: checkPlatform('ios') ? null : 50,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  viewLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  viewMiddle: {
    flex: 2,
    alignItems: 'center',
  },
  viewRight: {
    flex: 1,
  },
});
