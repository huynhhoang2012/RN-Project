import Block from '@components/Block';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import NetInfo from '@react-native-community/netinfo';
import messaging, {firebase} from '@react-native-firebase/messaging';
import {setStatusNetworking} from '@redux/slices/GeneralState';
import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import notifee, {EventType} from '@notifee/react-native';
import {avatar} from '@assets/images';

const DeviceSettings = () => {
  const dispatch = useAppDispatch();

  // const statusNetworking = useAppSelector(
  //   state => state.general.statusNetworking,
  // );

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

  const onDisplayNotification = async ({
    title,
    body,
  }: {
    title: string | undefined;
    body: string | undefined;
  }) => {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      sound: 'sound_noti',
    });

    // Display a notification
    await notifee.displayNotification({
      title: title,
      body: body,
      android: {
        channelId,
        largeIcon: avatar,
        smallIcon: 'ic_small_icon',
        sound: 'sound_noti',
        pressAction: {
          id: 'default',
        },
      },
    });
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage);
      onDisplayNotification({
        title: remoteMessage.notification?.title,
        body: remoteMessage.notification?.body,
      });
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          console.log('User pressed notification', detail.notification);
          break;
      }
    });
  }, []);

  return <Block />;
};

export default DeviceSettings;
