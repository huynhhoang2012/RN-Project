/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {WHITE} from '@assets/colors';
import Block from '@components/Block';
import Button from '@components/Button';
import CustomText from '@components/CustomText';
import {Platform, StyleSheet} from 'react-native';
import Toast, {BaseToastProps} from 'react-native-toast-message';

export default function ToastSettings() {
  const toastConfig = {
    success: ({text1}: BaseToastProps) => (
      <Button onPress={() => Toast.hide()} style={{width: '100%'}}>
        <Block style={[styles.container, {backgroundColor: '#4285f4'}]}>
          <CustomText style={styles.text}>{text1}</CustomText>
        </Block>
      </Button>
    ),
    error: ({text1}: BaseToastProps) => (
      <Button
        onPress={() => {
          Toast.hide();
        }}
        style={{width: '100%'}}>
        <Block style={[styles.container, {backgroundColor: '#ff3547'}]}>
          <CustomText style={styles.text}>{text1}</CustomText>
        </Block>
      </Button>
    ),
  };

  return (
    <Toast topOffset={Platform.OS === 'ios' ? 50 : 30} config={toastConfig} />
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 5,
    alignSelf: 'center',
  },
  text: {
    zIndex: 3,
    color: WHITE,
  },
});
