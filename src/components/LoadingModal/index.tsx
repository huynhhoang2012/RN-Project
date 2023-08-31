import LottieView from 'lottie-react-native';
import React from 'react';
import {Modal, View} from 'react-native';
import {useAppSelector} from '../../hooks/useRedux';
import styles from './styles';

const LoadingModal = () => {
  const showLoading = useAppSelector(state => state.general.showModalLoading);
  return (
    <Modal animationType="fade" transparent={true} visible={showLoading}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <LottieView
            source={require('../../assets/json/loading.json')}
            autoPlay
            loop
            style={styles.sizeLoading}
          />
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;
