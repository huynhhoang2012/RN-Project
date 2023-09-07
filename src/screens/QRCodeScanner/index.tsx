import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import QRCode, {QRCodeProps} from 'react-native-qrcode-svg';
import Feather from 'react-native-vector-icons/Feather';
import {WHITE} from '../../assets/colors';
import Button from '../../components/Button';
import Header from '../../components/Header';
import styles from './styles';

const tabs = [
  {id: 1, title: 'Scanner', type: 'scanner'},
  {id: 2, title: 'QR Code Generator', type: 'generator'},
];

const QRCodeScanner = () => {
  const qrGeneretorRef = useRef<QRCodeProps | Readonly<QRCodeProps>>();
  const [tabActive, setTabActive] = useState(tabs[0]);
  const [valueGenerator, setValueGenerator] = useState<string>('');
  const [isGenerator, setIsGenerator] = useState<boolean>(false);
  const _renderTab = () => {
    return (
      <View style={styles.containerTab}>
        {tabs.map(item => (
          <Button
            key={item.id}
            style={
              tabActive.id === item.id ? styles.itemTabsActive : styles.itemTabs
            }
            onPress={() => {
              setTabActive(item);
            }}>
            <Text
              style={
                tabActive.id === item.id
                  ? styles.titleTabActive
                  : styles.titleTab
              }>
              {item.title}
            </Text>
          </Button>
        ))}
      </View>
    );
  };

  // const saveQrCodeToGallery = () => {
  //   qrGeneretorRef?.current?.toDataURL(data => {
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
          <View style={styles.bodyContent}>
            <Text>123123</Text>
          </View>
        );

      case 'generator':
        return (
          <View style={styles.bodyContent}>
            <View style={styles.viewInputGenerator}>
              <TextInput
                value={valueGenerator}
                onChangeText={e => setValueGenerator(e)}
                style={styles.inputGenerator}
              />
              <Button
                style={styles.buttonGenerator}
                onPress={() => setIsGenerator(true)}>
                <Text style={styles.textBtnGenerator}>Generator</Text>
              </Button>
            </View>
            {isGenerator && (
              <>
                <View style={styles.bodyQRGenerator}>
                  {valueGenerator.length > 0 ? (
                    <QRCode
                      ref={qrGeneretorRef}
                      size={300}
                      value={valueGenerator}
                    />
                  ) : (
                    <></>
                  )}
                </View>
                <Button style={styles.btnSaveQRCode}>
                  <Feather name="download" size={20} color={WHITE} />
                  <Text style={{color: WHITE, fontSize: 14, marginLeft: 6}}>
                    Save to gallery{' '}
                  </Text>
                </Button>
              </>
            )}
          </View>
        );

      default:
        return <></>;
    }
  };
  return (
    <View style={styles.container}>
      <Header title="QR Code" isGoBack={true} />
      <View style={styles.body}>
        {_renderTab()}
        {_renderContent()}
      </View>
    </View>
  );
};

export default QRCodeScanner;
