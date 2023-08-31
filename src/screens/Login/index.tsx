import React, {useCallback, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from '../../components/Button';
import styles from './styles';
import {toast} from '../../utils/ToastHelper';
import {useAppDispatch} from '../../hooks/useRedux';
import * as generalAct from '../../redux/slices/GeneralState';

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    userName: '',
    password: '',
  });

  const onSubmitLogin = useCallback(() => {
    dispatch(generalAct.setStatusModalGlobal(true));
    try {
      if (state.userName === 'admin' && state.password === 'admin') {
        toast('login successful');
        return true;
      } else {
        toast('wrong login', 'error');
        return false;
      }
    } catch (e) {
      toast('wrong login', 'error');
      return false;
    }
  }, [dispatch, state.password, state.userName]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.body}>
        <Text testID={'testText'} style={styles.textTitle}>
          Login Screen
        </Text>
        <View>
          <Text>User name</Text>
          <TextInput
            placeholder="Username"
            testID="userNameText"
            value={state.userName}
            style={styles.inputLogin}
            onChangeText={e => {
              setState({...state, userName: e});
            }}
          />
        </View>

        <View>
          <Text>Password</Text>
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
        </View>
        <Button
          testID="buttonLogin"
          onPress={() => onSubmitLogin()}
          style={styles.buttonLogin}>
          <Text style={styles.titleButtonLogin}>Login</Text>
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
