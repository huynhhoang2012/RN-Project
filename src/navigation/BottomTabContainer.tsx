import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Setting';
import {BACKGROUND_BUTTON, WHITE} from '../assets/colors';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LottieView from 'lottie-react-native';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.viewButtonTab}>
              <View style={styles.viewIcon}>
                <LottieView
                  source={require('../assets/json/home.json')}
                  autoPlay
                  loop
                  style={styles.sizeIcon}
                />
              </View>
              <Text style={focused ? styles.textFocused : styles.textNoFocused}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.viewButtonTab}>
              <View style={styles.viewIcon}>
                <LottieView
                  source={require('../assets/json/settings.json')}
                  autoPlay
                  loop
                  style={styles.sizeIconSettings}
                />
              </View>
              <Text style={focused ? styles.textFocused : styles.textNoFocused}>
                Setting
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: WHITE,
    height: Platform.OS === 'ios' ? 85 : 65,
  },
  viewButtonTab: {
    position: 'absolute',
    top: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNoFocused: {
    fontSize: 12,
    marginTop: 4,
  },
  textFocused: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: '600',
    color: '#FF478D',
  },
  sizeIcon: {
    width: 50,
    height: 35,
  },
  sizeIconSettings: {
    width: 35,
    height: 25,
  },
  viewIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomTab;
