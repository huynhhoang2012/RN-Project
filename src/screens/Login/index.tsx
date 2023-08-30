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

const LoginScreen = () => {
  const [state, setState] = useState({
    userName: '',
    password: '',
  });

  const [status, setStatus] = useState('no login');

  const onSubmitLogin = useCallback(() => {
    try {
      if (state.userName === 'admin' && state.password === 'admin') {
        setStatus('login successful');
        return true;
      } else {
        setStatus('wrong login');
        return false;
      }
    } catch (e) {
      setStatus('wrong login');
      return false;
    }
  }, [state]);

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
          title={'Login'}
          onPress={() => onSubmitLogin()}
        />
        <Text>{status} </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
