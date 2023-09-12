import Block from '@components/Block';
import CustomText from '@components/CustomText';
import {useSafeAreaInsetsCustom} from '@hooks/useSafeAreaInsetsCustom';
import {goBack} from '@navigation/NavigationService';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../Button';
import styles from './styles';

type Props = {
  title?: string;
  isGoBack?: boolean;
};

const Header = (props: Props) => {
  const {title, isGoBack} = props;

  return (
    <Block style={styles.containerHeader}>
      <Block
        style={[
          styles.containerBody,
          {
            marginTop: useSafeAreaInsetsCustom().top,
          },
        ]}>
        <Block style={styles.viewLeft}>
          {isGoBack ? (
            <Button onPress={() => goBack()}>
              <AntDesign name="left" size={16} />
            </Button>
          ) : (
            <></>
          )}
        </Block>
        <Block style={styles.viewMiddle}>
          <CustomText style={styles.title}>{title || 'Header'}</CustomText>
        </Block>
        <Block style={styles.viewRight} />
      </Block>
    </Block>
  );
};

export default Header;
