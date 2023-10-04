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

  const [hidePassword, setHidePassword] = useState(isPassword);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsFocused(true);
  };
  const handleBlurInput = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsFocused(false);
    // handleBlur();
  };

  return (
    <>
      <Block
        style={[
          style,
          errors[name] && touched[name] && styles.borderErrorInput,
        ]}>
        {isFocused && (
          <CustomText style={styles.labelFocused}>{label}</CustomText>
        )}
        {value?.length === 0 && !isFocused && (
          <CustomText style={styles.labelBlur}>{label}</CustomText>
        )}
        <TextInput
          style={{width: '100%'}}
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
