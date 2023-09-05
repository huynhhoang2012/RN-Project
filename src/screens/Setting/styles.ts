import {StyleSheet} from 'react-native';
import {WHITE} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  viewFlatList: {
    flex: 1,
    paddingHorizontal: 8,
  },
  buttonSetting: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: WHITE,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewLeftItem: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleItem: {
    marginLeft: 10,
    fontSize: 14,
  },
});
