import {WHITE} from '@assets/colors';
import Button from '@components/Button';
import Header from '@components/Header';
import React, {useRef, useState} from 'react';
import {Keyboard, LayoutAnimation, Platform, UIManager} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import Block from '@components/Block';
import CustomText from '@components/CustomText';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const tabs = [
  {id: 1, title: 'Scanner', type: 'scanner'},
  {id: 2, title: 'QR Code Generator', type: 'generator'},
];

const QRCodeScanner = () => {
  const qrGeneretorRef = useRef<any>();
  const [tabActive, setTabActive] = useState(tabs[0]);
  const [valueGenerator, setValueGenerator] = useState<string>('');
  const [isGenerator, setIsGenerator] = useState<boolean>(false);

  const _renderTab = () => {
    return (
      <Block style={styles.containerTab}>
        {tabs.map(item => (
          <Button
            key={item.id}
            style={
              tabActive.id === item.id ? styles.itemTabsActive : styles.itemTabs
            }
            onPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut,
              );
              setTabActive(item);
            }}>
            <CustomText
              style={
                tabActive.id === item.id
                  ? styles.titleTabActive
                  : styles.titleTab
              }>
              {item.title}
            </CustomText>
          </Button>
        ))}
      </Block>
    );
  };

  // const saveQrCodeToGallery = () => {
  //   qrGeneretorRef.toDataURL(data => {
  //     RNFs.writeFile(
  //       RNFS.CachesDirectoryPath + '/some-name.png',
  //       data,
  //       'base64',
  //     )
  //       .then(success => {
  //         return CameraRoll.saveToCameraRoll(
  //           RNFS.CachesDirectoryPath + '/some-name.png',
  //           'photo',
  //         );
  //       })
  //       .then(() => {
  //         this.setState({busy: false, imageSaved: true});
  //         ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT);
  //       });
  //   });
  // };

  const _renderContent = () => {
    switch (tabActive.type) {
      case 'scanner':
        return (
          <Block style={styles.bodyContent}>
            <CustomText>123123</CustomText>
          </Block>
        );

      case 'generator':
        return (
          <Block style={styles.bodyContent}>
            <Block style={styles.viewInputGenerator}>
              <TextInput
                value={valueGenerator}
                onChangeText={e => setValueGenerator(e)}
                style={styles.inputGenerator}
              />
              <Button
                style={styles.buttonGenerator}
                onPress={() => {
                  Keyboard.dismiss();
                  setIsGenerator(true);
                }}>
                <CustomText style={styles.textBtnGenerator}>
                  Generator
                </CustomText>
              </Button>
            </Block>
            {isGenerator && (
              <>
                <Block style={styles.bodyQRGenerator}>
                  {valueGenerator.length > 0 ? (
                    <QRCode
                      getRef={qrGeneretorRef}
                      size={300}
                      value={valueGenerator}
                    />
                  ) : (
                    <></>
                  )}
                </Block>
                <Button style={styles.btnSaveQRCode}>
                  <Feather name="download" size={20} color={WHITE} />
                  <CustomText
                    style={{color: WHITE, fontSize: 14, marginLeft: 6}}>
                    Save to gallery{' '}
                  </CustomText>
                </Button>
              </>
            )}
          </Block>
        );

      default:
        return <></>;
    }
  };
  return (
    <Block style={styles.container}>
      <Header title="QR Code" isGoBack={true} />
      <Block style={styles.body}>
        {_renderTab()}
        {_renderContent()}
      </Block>
    </Block>
  );
};

export default QRCodeScanner;
