import {SVG_EYE_VISIBLE} from '@assets/xml';
import Block from '@components/Block';
import Button from '@components/Button';
import CustomText from '@components/CustomText';
import React, {useRef, useState} from 'react';
import {Animated, Easing, Platform, UIManager, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';
import {styles} from './styles';

type Props = {
  style?: ViewStyle | ViewStyle[];
  placeholder?: string;
  isPassword?: boolean;
  value?: string;
  onChange?: (e: string) => void;
  handleBlur?: (e: string) => void;
  label?: string;
  name: string;
  touched?: any;
  errors?: any;
};

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const CustomInput = (props: Props) => {
  const {style, isPassword, value, onChange, label, name, errors, touched} =
    props;

  const positionLabel = useRef(new Animated.Value(0)).current;

  const [hidePassword, setHidePassword] = useState(isPassword);

  const handleFocus = () => {
    Animated.timing(positionLabel, {
      toValue: -10,
      duration: 200,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  };

  const handleBlurInput = () => {
    if (value?.length === 0) {
      Animated.timing(positionLabel, {
        toValue: 18,
        duration: 200,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    }
  };

  return (
    <>
      <Block
        style={[
          style,
          errors[name] && touched[name] && styles.borderErrorInput,
        ]}>
        <Animated.Text style={[styles.labelText, {top: positionLabel}]}>
          {label}
        </Animated.Text>
        <TextInput
          value={value}
          onChangeText={onChange}
          secureTextEntry={hidePassword}
          onFocus={handleFocus}
          onBlur={handleBlurInput}
        />
        {isPassword && (
          <Button
            style={styles.buttonEye}
            onPress={() => setHidePassword(pre => !pre)}>
            <SvgXml xml={SVG_EYE_VISIBLE} width={16} height={16} />
          </Button>
        )}
      </Block>
      {errors[name] && touched[name] ? (
        <Block style={styles.viewErrorText}>
          <CustomText size={12} weight="500" style={styles.error}>
            {errors[name]}
          </CustomText>
        </Block>
      ) : (
        <Block style={{height: 24}} />
      )}
    </>
  );
};

export default CustomInput;
