/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Toast, {BaseToastProps} from 'react-native-toast-message';
import {WHITE} from '../assets/colors';

export default function ToastSettings() {
  const toastConfig = {
    success: ({text1}: BaseToastProps) => (
      <TouchableOpacity onPress={() => Toast.hide()} style={{width: '100%'}}>
        <View style={[styles.container, {backgroundColor: '#4285f4'}]}>
          <Text style={styles.text}>{text1}</Text>
        </View>
      </TouchableOpacity>
    ),
    error: ({text1}: BaseToastProps) => (
      <TouchableOpacity
        onPress={() => {
          Toast.hide();
        }}
        style={{width: '100%'}}>
        <View style={[styles.container, {backgroundColor: '#ff3547'}]}>
          <Text style={styles.text}>{text1}</Text>
        </View>
      </TouchableOpacity>
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
