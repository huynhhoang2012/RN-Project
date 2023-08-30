import {StyleSheet} from 'react-native';
import {BACKGROUND_MODAL, WHITE} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_MODAL,
  },
  modalView: {
    width: '50%',
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
    zIndex: 2,
    position: 'absolute',
    minHeight: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'relative',
    zIndex: 1,
    left: 0,
    top: 0,
    alignItems: 'center',
  },
});
