import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import * as generalAct from '../../redux/slices/GeneralState';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../Button';

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
          <Button
            onPress={() => turnOffModal()}
            style={{position: 'absolute', top: 5, right: 5}}>
            <AntDesign name="closecircle" size={18} />
          </Button>
          <Text>Global Modal</Text>
        </View>
      </View>
    </Modal>
  );
};

export default GlobalModal;
