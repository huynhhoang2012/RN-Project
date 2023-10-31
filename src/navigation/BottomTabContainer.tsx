/* eslint-disable react/react-in-jsx-scope */
import {PRIMARY, WHITE} from '@assets/colors';
import Block from '@components/Block';
import CustomText from '@components/CustomText';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/Home';
import SettingsScreen from '@screens/Setting';
import LottieView from 'lottie-react-native';
import {Platform, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: Platform.OS !== 'ios',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <Block style={styles.viewButtonTab}>
              <Block style={styles.viewIcon}>
                <LottieView
                  source={require('../assets/json/home.json')}
                  autoPlay
                  loop
                  style={styles.sizeIcon}
                />
              </Block>
              <CustomText
                style={focused ? styles.textFocused : styles.textNoFocused}>
                Home
              </CustomText>
            </Block>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <Block style={styles.viewButtonTab}>
              <Block style={styles.viewIcon}>
                <LottieView
                  source={require('../assets/json/settings.json')}
                  autoPlay
                  loop
                  style={styles.sizeIconSettings}
                />
              </Block>
              <CustomText
                style={focused ? styles.textFocused : styles.textNoFocused}>
                Setting
              </CustomText>
            </Block>
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
    color: PRIMARY,
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
