import Block from '@components/Block';
import {useAppSelector} from '@hooks/useRedux';
import LottieView from 'lottie-react-native';
import React from 'react';
import {Modal} from 'react-native';
import styles from './styles';

const LoadingModal = () => {
  const showLoading = useAppSelector(state => state.general.showModalLoading);
  return (
    <Modal animationType="fade" transparent={true} visible={showLoading}>
      <Block style={styles.container}>
        <Block style={styles.modalView}>
          <LottieView
            source={require('@assets/json/loading.json')}
            autoPlay
            loop
            style={styles.sizeLoading}
          />
        </Block>
      </Block>
    </Modal>
  );
};

export default React.memo(LoadingModal);
