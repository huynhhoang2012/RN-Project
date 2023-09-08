import React from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSafeAreaInsetsCustom} from '../../hooks/useSafeAreaInsetsCustom';
import {goBack} from '../../navigation/NavigationService';
import Button from '../Button';
import styles from './styles';
import {checkPlatform} from '../../utils/func';

type Props = {
  title?: string;
  isGoBack?: boolean;
};

const Header = (props: Props) => {
  const {title, isGoBack} = props;

  return (
    <View style={[styles.containerHeader]}>
      <View
        style={[
          styles.containerBody,
          {
            marginTop: useSafeAreaInsetsCustom().top,
          },
        ]}>
        <View style={styles.viewLeft}>
          {isGoBack ? (
            <Button onPress={() => goBack()}>
              <AntDesign name="left" size={16} />
            </Button>
          ) : (
            <></>
          )}
        </View>
        <View style={[styles.viewMiddle]}>
          <Text style={[styles.title]}>{title || 'Header'}</Text>
        </View>
        <View style={styles.viewRight} />
      </View>
    </View>
  );
};

export default Header;
