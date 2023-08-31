import {Modal, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const LoadingModal = () => {
  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text>LoadingModal</Text>
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;
