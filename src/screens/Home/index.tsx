import Block from '@components/Block';
import CustomText from '@components/CustomText';
import Header from '@components/Header';
import React, {useState} from 'react';
import styles from './styles';
import CustomSearch from '@components/CustomSearch';
import {useSafeAreaInsetsCustom} from '@hooks/useSafeAreaInsetsCustom';
import {Platform} from 'react-native';

const HomeScreen = () => {
  const [input, setInput] = useState<string>();
  return (
    <Block
      style={[
        styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          paddingTop:
            useSafeAreaInsetsCustom().top + Platform.OS === 'ios' ? 0 : 10,
        },
      ]}>
      {/* <Header title="Home" /> */}
      <CustomSearch
        value={input}
        onChange={(e: string) => setInput(e)}
        onSearchClear={() => setInput('')}
        placeholder="Search ..."
      />
      <CustomText light>Home Screen</CustomText>
    </Block>
  );
};

export default HomeScreen;
