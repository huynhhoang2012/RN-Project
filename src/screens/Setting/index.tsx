import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../components/Button';
import {navigate} from '../../navigation/NavigationService';

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
        <View style={styles.viewLeftItem}>
          {item.icon}
          <Text style={styles.titleItem}>{item.title}</Text>
        </View>
        <View>
          <AntDesign name="right" size={14} />
        </View>
      </Button>
    );
  };
  return (
    <View style={styles.container}>
      <Header title="Settings" />
      <FlatList
        style={styles.viewFlatList}
        data={listButtonSetting}
        renderItem={({item}) => _renderButtonList(item)}
        keyExtractor={(item: typeListButtonSetting) => item.title}
      />
    </View>
  );
};

export default SettingsScreen;
