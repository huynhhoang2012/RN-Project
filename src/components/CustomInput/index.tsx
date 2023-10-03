import {SVG_EYE_VISIBLE} from '@assets/xml';
import Block from '@components/Block';
import Button from '@components/Button';
import CustomText from '@components/CustomText';
import React, {useState} from 'react';
import {LayoutAnimation, Platform, UIManager, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';
import {styles} from './styles';

type Props = {
  style?: ViewStyle | ViewStyle[];
  placeholder?: string;
  isPassword?: boolean;
  value?: string;
  onChange?: (e: string) => void;
  label?: string;
};

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const CustomInput = (props: Props) => {
  const {style, isPassword, value, onChange, label} = props;

  const [hidePassword, setHidePassword] = useState(isPassword);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsFocused(true);
  };
  const handleBlur = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsFocused(false);
  };

  return (
    <Block style={style}>
      {value && value?.length > 0 && isFocused && (
        <CustomText style={styles.labelFocused}>{label}</CustomText>
      )}
      {value?.length === 0 && !isFocused && (
        <CustomText style={styles.labelBlur}>{label}</CustomText>
      )}
      <TextInput
        value={value}
        onChangeText={onChange}
        secureTextEntry={hidePassword}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isPassword && (
        <Button
          style={styles.buttonEye}
          onPress={() => setHidePassword(pre => !pre)}>
          <SvgXml xml={SVG_EYE_VISIBLE} width={16} height={16} />
        </Button>
      )}
    </Block>
  );
};

export default CustomInput;
