import React from 'react';
import MyStack from './src/navigation/NavigationContainer';
import 'react-native-gesture-handler';
import store from './src/redux/configureStore';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
}

export default App;
