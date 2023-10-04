import Block from '@components/Block';
import CustomImage from '@components/CustomImage';
import {navigate} from '@navigation/NavigationService';
import React, {useEffect} from 'react';
import styles from './styles';

const OnBoarding = () => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate('Login');
    }, 300);

    return () => {
      clearTimeout(timeOut);
    };
  });
  return (
    <Block flex={1} center middle style={styles.container}>
      <CustomImage
        source={require('../../assets/images/avatar.png')}
        style={{width: 200, height: 200}}
        checkEmpty={true}
      />
    </Block>
  );
};

export default OnBoarding;
