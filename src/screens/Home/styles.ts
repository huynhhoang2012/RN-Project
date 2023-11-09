import {WHITE} from '@assets/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    padding: 10,
  },

  viewItemProduct: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: WHITE,
    padding: 10,
    borderRadius: 10,
  },
  imageItemProduct: {
    width: 100,
    height: 100,
  },
  viewRightItemProduct: {
    marginLeft: 12,
    width: '80%',
  },
});
