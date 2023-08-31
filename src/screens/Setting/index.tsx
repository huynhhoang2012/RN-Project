import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import styles from './styles';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Settings" />
      <Text>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;
