import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';

type Props = {
  onPress?: () => void;
  style?: ViewStyle;
  testID?: string;
  children?: string | JSX.Element | JSX.Element[];
};

const Button = (props: Props) => {
  const {children, onPress, style, testID} = props;
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={[styles.container, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
