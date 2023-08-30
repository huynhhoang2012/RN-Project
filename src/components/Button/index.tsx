import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';

type Props = {
  title?: string;
  onPress?: () => void;
  style?: ViewStyle;
  testID?: string;
};

const Button = (props: Props) => {
  const {title, onPress, style, testID} = props;
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
