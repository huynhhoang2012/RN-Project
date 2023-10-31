import Block from '@components/Block';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import NetInfo from '@react-native-community/netinfo';
import messaging, {firebase} from '@react-native-firebase/messaging';
import {setStatusNetworking} from '@redux/slices/GeneralState';
import React, {useEffect} from 'react';
import {Alert} from 'react-native';

const DeviceSettings = () => {
  const dispatch = useAppDispatch();

  const statusNetworking = useAppSelector(
    state => state.general.statusNetworking,
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(result => {
      dispatch(setStatusNetworking(!!result.isConnected));
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

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

  return <Block />;
};

export default DeviceSettings;
