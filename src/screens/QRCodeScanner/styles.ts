import {StyleSheet} from 'react-native';
import {BACKGROUND_BUTTON, BORDER, WHITE} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: WHITE,
  },
  containerTab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 10,
    borderColor: BORDER,
    borderWidth: 1,
  },
  itemTabs: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  itemTabsActive: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: BACKGROUND_BUTTON,
  },
  titleTab: {
    fontSize: 15,
  },
  titleTabActive: {
    color: WHITE,
    fontSize: 15,
  },
  bodyContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  viewInputGenerator: {
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputGenerator: {
    height: 40,
    borderRadius: 6,
    width: '75%',
    borderColor: BORDER,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  buttonGenerator: {
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: BACKGROUND_BUTTON,
  },
  textBtnGenerator: {
    color: WHITE,
    fontSize: 12,
  },
  bodyQRGenerator: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderColor: BORDER,
    borderWidth: 1,
    marginBottom: 10,
  },
  btnSaveQRCode: {
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: BACKGROUND_BUTTON,
  },
});
