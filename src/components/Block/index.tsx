import {View, ViewStyle} from 'react-native';
import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';

type BlockProps = {
  children?: React.ReactNode;
  pa?: number;
  pl?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  px?: number;
  py?: number;
  style?: ViewStyle | ViewStyle[];
  flex?: number | boolean;
  row?: boolean;
  shadow?: boolean;
  ma?: number;
  ml?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  center?: boolean;
  middle?: boolean;
};

const Block = (props: BlockProps) => {
  const {
    children,
    pa,
    pl,
    pt,
    pr,
    pb,
    px,
    py,
    style,
    flex,
    row,
    shadow,
    ma,
    ml,
    mt,
    mr,
    mb,
    center,
    middle,
    ...rest
  } = props;

  const blockStyles: any = [
    flex && {flex: flex},
    row && {flexDirection: 'row'},
    shadow && styles.shadow,
    pa && {padding: pa},
    pl && {paddingLeft: pl},
    pr && {paddingRight: pr},
    pt && {paddingTop: pt},
    pb && {paddingBottom: pb},
    px && {paddingHorizontal: px},
    py && {paddingVertical: py},
    ma && {margin: ma},
    ml && {marginLeft: ml},
    mr && {marginRight: mr},
    mt && {marginTop: mt},
    mb && {marginBottom: mb},
    center && {justifyContent: 'center'},
    middle && {alignItems: 'center'},
    style,
  ];

  return (
    <View style={blockStyles} {...rest}>
      {children}
    </View>
  );
};

export default React.memo(Block);
