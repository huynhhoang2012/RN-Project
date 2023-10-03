import {WHITE} from '@assets/colors';
import {SVG_FACEBOOK, SVG_GOOGLE} from '@assets/xml';
import Block from '@components/Block';
import Button from '@components/Button';
import CustomInput from '@components/CustomInput';
import CustomSvg from '@components/CustomSvg';
import CustomText from '@components/CustomText';
import {useSafeAreaInsetsCustom} from '@hooks/useSafeAreaInsetsCustom';
import {goBack} from '@navigation/NavigationService';
import React, {useState} from 'react';
import styles from './styles';

type SignUpStateType = {
  email?: string;
  password?: string;
  repeatPassword?: string;
};

const SignUp = () => {
  const [state, setState] = useState<SignUpStateType>({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const goBackLoginScreen = () => {
    goBack();
  };
  return (
    <Block style={styles.container}>
      <Block style={[styles.body, {marginTop: useSafeAreaInsetsCustom().top}]}>
        <Block flex middle center>
          <CustomText testID={'testText'} style={styles.textTitle}>
            Sign Up
          </CustomText>
        </Block>
        <Block flex={2} center>
          <CustomInput
            style={styles.inputLogin}
            label="Email"
            value={state.email}
            onChange={e => setState({...state, email: e})}
          />
          <CustomInput
            style={styles.inputLogin}
            label="Password"
            value={state.password}
            isPassword={true}
            onChange={e => setState({...state, password: e})}
          />
          <CustomInput
            style={styles.inputLogin}
            label="Repeat password"
            value={state.repeatPassword}
            isPassword={true}
            onChange={e => setState({...state, repeatPassword: e})}
          />
          <Button style={styles.buttonLogin}>
            <CustomText style={styles.titleButtonLogin}>Sign Up</CustomText>
          </Button>
        </Block>
        <Block flex middle center style={{}}>
          <CustomText>Or sign up with</CustomText>
          <Block row mt={17} style={styles.viewButtonSocial}>
            <Button style={styles.buttonSocial}>
              <CustomText size={16} weight="700" color={WHITE}>
                Facebook
              </CustomText>
              <CustomSvg xml={SVG_FACEBOOK} width={20} height={20} />
            </Button>
            <Button style={styles.buttonSocial}>
              <CustomText size={16} weight="700" color={WHITE}>
                Google
              </CustomText>
              <CustomSvg xml={SVG_GOOGLE} width={20} height={20} />
            </Button>
          </Block>
        </Block>

        <Block flex middle center>
          <Button
            onPress={() => {
              goBackLoginScreen();
            }}>
            <CustomText style={styles.textUnderline}>Log In </CustomText>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default SignUp;
