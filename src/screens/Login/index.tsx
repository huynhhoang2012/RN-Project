import {WHITE} from '@assets/colors';
import {SVG_FACEBOOK, SVG_GOOGLE} from '@assets/xml';
import Block from '@components/Block';
import Button from '@components/Button';
import CustomInput from '@components/CustomInput';
import CustomSvg from '@components/CustomSvg';
import CustomText from '@components/CustomText';
import {useAppDispatch} from '@hooks/useRedux';
import {useSafeAreaInsetsCustom} from '@hooks/useSafeAreaInsetsCustom';
import {navigate} from '@navigation/NavigationService';
import * as generalAct from '@redux/slices/GeneralState';
import {toast} from '@utils/ToastHelper';
import {Formik} from 'formik';
import React, {useCallback} from 'react';
import * as yup from 'yup';
import styles from './styles';

type LoginStateType = {
  email: string;
  password: string;
};

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email address is not valid.')
    .required('Please enter your email address here. '),
  password: yup
    .string()
    .required('Please enter your password. ')
    .min(6, 'Please enter a password Password must be over 6 characters.'),
});

const LoginScreen = () => {
  const dispatch = useAppDispatch();

  const onSubmitLogin = useCallback(
    ({email, password}: LoginStateType) => {
      dispatch(generalAct.setLoading(true));
      setTimeout(() => {
        try {
          if (email === 'admin' && password === 'admin') {
            toast('login successful');
            dispatch(generalAct.setLoading(false));
            navigate('BottomTab');
          } else {
            toast('wrong login', 'error');
            dispatch(generalAct.setLoading(false));
          }
        } catch (e) {
          toast('wrong login', 'error');
          dispatch(generalAct.setLoading(false));
        }
      }, 5000);
    },
    [dispatch],
  );

  const goToSignUpScreen = () => {
    navigate('SignUp');
  };

  return (
    <Block style={styles.container}>
      <Block style={[styles.body, {marginTop: useSafeAreaInsetsCustom().top}]}>
        <Block flex={1} middle center>
          <CustomText testID={'testText'} style={styles.textTitle}>
            Log In
          </CustomText>
        </Block>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={values => {
            onSubmitLogin(values);
          }}>
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
                isPassword={true}
                onChange={handleChange('password')}
                handleBlur={handleBlur('email')}
                touched={touched}
                errors={errors}
                name="password"
              />
              <Button style={styles.buttonLogin} onPress={handleSubmit}>
                <CustomText style={styles.titleButtonLogin}>Login</CustomText>
              </Button>
              <Button style={{marginTop: 12}}>
                <CustomText style={styles.textUnderline}>
                  Forgot password?
                </CustomText>
              </Button>
            </Block>
          )}
        </Formik>

        <Block flex={1} middle center style={{}}>
          <CustomText>Login with</CustomText>
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

        <Block flex={1} middle center>
          <Button onPress={() => goToSignUpScreen()}>
            <CustomText style={styles.textUnderline}>
              Dont have and account? Sign Up
            </CustomText>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default LoginScreen;
