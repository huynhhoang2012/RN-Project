import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';

type Props = {
  onPress?: () => void;
  style?: ViewStyle;
  testID?: string;
  children?: string | JSX.Element | JSX.Element[];
  disabled?: boolean;
  middle?: boolean;
  center?: boolean;
  row?: boolean;
};

const Button = (props: Props) => {
  const {children, onPress, style, testID, disabled, middle, center, row} =
    props;

  const buttonStyles: any = [
    row && {flexDirection: 'row'},
    center && {justifyContent: 'center'},
    middle && {alignItems: 'center'},
    style,
  ];
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={[styles.container, buttonStyles]}
      disabled={disabled}>
      {children}
    </TouchableOpacity>
  );
};

export default React.memo(Button);
