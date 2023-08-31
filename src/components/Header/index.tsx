import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsetsCustom} from '../../hooks/useSafeAreaInsetsCustom';

type Props = {
  title?: string;
};

const Header = (props: Props) => {
  const {title} = props;

  return (
    <View style={[styles.container]}>
      <Text style={[styles.title, {marginTop: useSafeAreaInsetsCustom().top}]}>
        {title || 'Header'}
      </Text>
    </View>
  );
};

export default Header;
