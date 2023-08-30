import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
