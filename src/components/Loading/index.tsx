import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <LottieView
      source={require('@assets/json/loading_blue.json')}
      autoPlay
      loop
      style={styles.sizeLoading}
    />
  );
};

export default Loading;

const styles = StyleSheet.create({
  sizeLoading: {
    width: 50,
    height: 50,
  },
});
