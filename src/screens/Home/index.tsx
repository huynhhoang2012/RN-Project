import Block from '@components/Block';
import CustomText from '@components/CustomText';
import Header from '@components/Header';
import React from 'react';
import styles from './styles';

const HomeScreen = () => {
  return (
    <Block style={styles.container}>
      <Header title="Home" />
      <CustomText>HomeScreen</CustomText>
    </Block>
  );
};

export default HomeScreen;
