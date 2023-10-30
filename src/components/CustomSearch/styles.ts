import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {paddingHorizontal: 10, flexDirection: 'row'},
  searchInputWrapper: {
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    zIndex: 10,
    alignItems: 'center',
    backgroundColor: '#F1F1F2',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.2,
  },
  searchInputStyle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.5,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    // paddingLeft: 32,
  },
  searchIconWrapper: {
    position: 'absolute',
    left: 25,
    top: Platform.OS === 'android' ? 21 : 18,
  },
  closeIconWrapper: {
    position: 'absolute',
    right: 10,
  },

  textCancel: {
    paddingLeft: 16,
    fontSize: 17,
    color: '#007AFF',
  },
});
