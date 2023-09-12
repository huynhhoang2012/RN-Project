import Block from '@components/Block';
import Button from '@components/Button';
import CustomText from '@components/CustomText';
import {useAppDispatch} from '@hooks/useRedux';
import {navigate} from '@navigation/NavigationService';
import * as generalAct from '@redux/slices/GeneralState';
import {toast} from '@utils/ToastHelper';
import React, {useCallback, useState} from 'react';
import {KeyboardAvoidingView, Platform, TextInput} from 'react-native';
import styles from './styles';

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    userName: '',
    password: '',
  });

  const onSubmitLogin = useCallback(() => {
    dispatch(generalAct.setLoading(true));
    setTimeout(() => {
      try {
        if (state.userName === 'admin' && state.password === 'admin') {
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
  }, [dispatch, state.password, state.userName]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Block style={styles.body}>
        <CustomText testID={'testText'} style={styles.textTitle}>
          Login Screen
        </CustomText>
        <Block>
          <CustomText>User name</CustomText>
          <TextInput
            placeholder="Username"
            testID="userNameText"
            value={state.userName}
            style={styles.inputLogin}
            onChangeText={e => {
              setState({...state, userName: e});
            }}
          />
        </Block>

        <Block>
          <CustomText>Password</CustomText>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            testID="passwordText"
            value={state.password}
            style={styles.inputLogin}
            onChangeText={e => {
              setState({...state, password: e});
            }}
          />
        </Block>
        <Button
          testID="buttonLogin"
          onPress={() => onSubmitLogin()}
          style={styles.buttonLogin}>
          <CustomText style={styles.titleButtonLogin}>Login</CustomText>
        </Button>
      </Block>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
