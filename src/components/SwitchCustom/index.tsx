import React, {useEffect, useRef} from 'react';
import {Animated, Easing, TouchableOpacity} from 'react-native';
import styles from './styles';
import {BORDER, PRIMARY} from '@assets/colors';

type Props = {
  value?: boolean;
  handleChange: (e: boolean) => void;
};

const SwitchCustom = (props: Props) => {
  const {value, handleChange} = props;

  const potionCircle = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (value) {
      Animated.timing(potionCircle, {
        toValue: 25,
        duration: 200,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    } else {
      Animated.timing(potionCircle, {
        toValue: 5,
        duration: 200,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    }
  }, [potionCircle, value]);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.container, {backgroundColor: value ? PRIMARY : BORDER}]}
      onPress={() => handleChange(!value)}>
      <Animated.View style={[styles.circle, {marginLeft: potionCircle}]} />
    </TouchableOpacity>
  );
};

export default React.memo(SwitchCustom);
