/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GlobalModal from '@components/GlobalModal';
import LoadingModal from '@components/LoadingModal';
import LoginScreen from '@screens/Login';
import BottomTab from './BottomTabContainer';
import {navigationRef} from './NavigationService';
// import QRCodeScanner from '@screens/QRCodeScanner';
import OnBoarding from '@screens/OnBoarding';
import SignUp from '@screens/SignUp';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={'OnBoarding'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          {/* <Stack.Screen name="QRCodeScanner" component={QRCodeScanner} /> */}
        </Stack.Navigator>
      </NavigationContainer>
      <GlobalModal />
      <LoadingModal />
    </>
  );
}

export default MyStack;
