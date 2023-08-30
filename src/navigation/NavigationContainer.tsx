import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/Login';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Login'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
