import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import MyStack from './src/navigation/NavigationContainer';
import store from './src/redux/configureStore';
import ToastSettings from './src/services/ToastSetting';
import * as Sentry from '@sentry/react-native';
import messaging, {firebase} from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

Sentry.init({
  dsn: 'https://ef911928946058b025d09dc0acb2bb66@o4505838529740800.ingest.sentry.io/4505838533410816',
  tracesSampleRate: 1.0,
  debug: true,
});

function App(): JSX.Element {
  const getToken = async () => {
    let fcmToken = await firebase.messaging().getToken();
    console.log('token = ', fcmToken);
  };

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  return (
    <>
      <Provider store={store}>
        <MyStack />
      </Provider>
      <ToastSettings />
    </>
  );
}

export default Sentry.wrap(App);
