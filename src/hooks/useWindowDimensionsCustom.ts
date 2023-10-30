import {Dimensions} from 'react-native';

export const useWindowDimensionsCustom = () => {
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;
  return {width, height};
};
