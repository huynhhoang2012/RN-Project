import Block from '@components/Block';
import CustomText from '@components/CustomText';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import * as generalAct from '@redux/slices/GeneralState';
import React from 'react';
import {Modal} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../Button';
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
      <Block style={styles.container}>
        <Button style={styles.overlay} onPress={() => turnOffModal()} />
        <Block style={styles.modalView}>
          <Button onPress={() => turnOffModal()} style={styles.btnClose}>
            <AntDesign name="closecircle" size={18} />
          </Button>
          <CustomText>Global Modal</CustomText>
        </Block>
      </Block>
    </Modal>
  );
};

export default React.memo(GlobalModal);
