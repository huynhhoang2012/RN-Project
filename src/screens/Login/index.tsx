import React, {useCallback, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const LoginScreen = () => {
  const [state, setState] = useState({
    userName: '',
    password: '',
  });

  const onSubmitLogin = useCallback(() => {
    try {
      if (state.userName === 'admin' && state.password === '123456') {
      }
    } catch (e) {}
  }, [state]);
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.textTitle}>Login Screen</Text>
        <View>
          <Text>User name</Text>
          <TextInput
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
            value={state.password}
            style={styles.inputLogin}
            onChangeText={e => {
              setState({...state, password: e});
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => onSubmitLogin()}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
