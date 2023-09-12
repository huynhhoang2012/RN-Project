import Block from '@components/Block';
import Button from '@components/Button';
import CustomText from '@components/CustomText';
import Header from '@components/Header';
import {navigate} from '@navigation/NavigationService';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

type typeListButtonSetting = {
  title: string;
  screen: string;
  icon: string | JSX.Element | JSX.Element[];
};

const SettingsScreen = () => {
  const listButtonSetting: typeListButtonSetting[] = [
    {
      title: 'QR Code',
      screen: 'QRCodeScanner',
      icon: <MaterialCommunityIcons name="qrcode-scan" size={16} />,
    },
  ];

  const _renderButtonList = (item: typeListButtonSetting) => {
    return (
      <Button
        style={styles.buttonSetting}
        onPress={() => {
          navigate(item.screen);
        }}>
        <Block style={styles.viewLeftItem}>
          {item.icon}
          <CustomText style={styles.titleItem}>{item.title}</CustomText>
        </Block>
        <Block>
          <AntDesign name="right" size={14} />
        </Block>
      </Button>
    );
  };
  return (
    <Block style={styles.container}>
      <Header title="Settings" />
      <FlatList
        style={styles.viewFlatList}
        data={listButtonSetting}
        renderItem={({item}) => _renderButtonList(item)}
        keyExtractor={(item: typeListButtonSetting) => item.title}
      />
    </Block>
  );
};

export default SettingsScreen;
