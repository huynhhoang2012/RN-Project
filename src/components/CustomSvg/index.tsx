import React from 'react';
import {SvgXml} from 'react-native-svg';

type Props = {
  xml: string | null;
  width: number;
  height: number;
};

const CustomSvg = (props: Props) => {
  const {xml, width, height} = props;
  return <SvgXml xml={xml} width={width} height={height} />;
};

export default CustomSvg;
