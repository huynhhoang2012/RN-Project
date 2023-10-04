import * as Sentry from '@sentry/react-native';
import DeviceSettings from '@services/DeviceSettings';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import MyStack from './src/navigation/NavigationContainer';
import store from './src/redux/configureStore';
import ToastSettings from './src/services/ToastSetting';

if (!__DEV__) {
  Sentry.init({
    dsn: 'https://ef911928946058b025d09dc0acb2bb66@o4505838529740800.ingest.sentry.io/4505838533410816',
    tracesSampleRate: 1.0,
    debug: true,
  });
}

function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <MyStack />
        <DeviceSettings />
      </Provider>
      <ToastSettings />
    </>
  );
}

export default Sentry.wrap(App);
