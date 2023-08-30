import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import * as generalAct from '../../redux/slices/GeneralState';
import styles from './styles';

const GlobalModal = () => {
  const dispatch = useAppDispatch();
  const showModalGlobal = useAppSelector(
    state => state.general.showModalGlobal,
  );

  const turnOffModal = () => {
    dispatch(generalAct.setStatusModalGlobal(false));
  };

  return (
    <Modal animationType="fade" transparent={true} visible={showModalGlobal}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => turnOffModal()}
        />
        <View style={styles.modalView}>
          <Text>Global Modal</Text>
        </View>
      </View>
    </Modal>
  );
};

export default GlobalModal;
