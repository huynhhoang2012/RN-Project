import {WHITE} from '@assets/colors';
import {SVG_FACEBOOK, SVG_GOOGLE} from '@assets/xml';
import Block from '@components/Block';
import Button from '@components/Button';
import CustomInput from '@components/CustomInput';
import CustomSvg from '@components/CustomSvg';
import CustomText from '@components/CustomText';
import {useSafeAreaInsetsCustom} from '@hooks/useSafeAreaInsetsCustom';
import {goBack} from '@navigation/NavigationService';
import {Formik} from 'formik';
import React from 'react';
import * as yup from 'yup';
import styles from './styles';

type SignUpStateType = {
  email?: string;
  password?: string;
  repeatPassword?: string;
};

const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email address is not valid.')
    .required('Please enter your email address here. '),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(6, 'Please enter a password Password must be over 6 characters.'),
  repeatPassword: yup
    .string()
    .required('Please enter your password.')
    .oneOf(
      [yup.ref('password'), null],
      `Confirm password Passwords don't match.`,
    ),
});

const SignUp = () => {
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
        <Formik
          initialValues={{
            email: '',
            password: '',
            repeatPassword: '',
          }}
          validationSchema={signUpSchema}
          onSubmit={values => {}}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <Block flex={2} center>
              <CustomInput
                style={styles.inputLogin}
                label="Email"
                value={values.email}
                onChange={handleChange('email')}
                handleBlur={handleBlur('email')}
                touched={touched}
                errors={errors}
                name="email"
              />
              <CustomInput
                style={styles.inputLogin}
                label="Password"
                value={values.password}
                onChange={handleChange('password')}
                handleBlur={handleBlur('password')}
                touched={touched}
                errors={errors}
                name="password"
                isPassword={true}
              />
              <CustomInput
                style={styles.inputLogin}
                label="Repeat password"
                value={values.repeatPassword}
                onChange={handleChange('repeatPassword')}
                handleBlur={handleBlur('repeatPassword')}
                touched={touched}
                errors={errors}
                name="repeatPassword"
                isPassword={true}
              />

              <Button style={styles.buttonLogin} onPress={handleSubmit}>
                <CustomText style={styles.titleButtonLogin}>Sign Up</CustomText>
              </Button>
            </Block>
          )}
        </Formik>

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
