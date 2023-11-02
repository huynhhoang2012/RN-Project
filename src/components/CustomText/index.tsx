import {fonts} from '@assets/fonts';
import React from 'react';
import {Platform, Text, TextStyle, ViewStyle} from 'react-native';

type CustomTextProps = {
  children?: React.ReactNode;
  size?: number;
  center?: boolean;
  weight?: string;
  color?: string;
  style?: TextStyle | ViewStyle | ViewStyle[];
  testID?: string;
  bold?: boolean;
  extraBold?: boolean;
  italic?: boolean;
  light?: boolean;
  medium?: boolean;
  regular?: boolean;
  semiBold?: boolean;
};

const CustomText = (props: CustomTextProps) => {
  const {
    children,
    size,
    center,
    weight,
    color,
    style,
    testID,
    bold,
    extraBold,
    italic,
    light,
    medium,
    regular,
    semiBold,
    ...rest
  } = props;

  const customTextStyle: any = [
    size && {fontSize: size},
    center && {textAlign: 'center'},
    weight && {
      fontWeight: weight === 'bold' && Platform.OS === 'ios' ? '500' : weight,
    },
    color && {color},
    bold && fonts.FONT_BOLD,
    extraBold && fonts.FONT_EXTRABOLD,
    italic && fonts.FONT_ITALIC,
    light && fonts.FONT_LIGHT,
    medium && fonts.FONT_MEDIUM,
    regular && fonts.FONT_REGULAR,
    semiBold && fonts.FONT_SEMIBOLD,
    style,
  ];
  return (
    <Text testID={testID} style={customTextStyle} {...rest}>
      {children}
    </Text>
  );
};

CustomText.defaultProps = {
  light: true,
};

export default React.memo(CustomText);
