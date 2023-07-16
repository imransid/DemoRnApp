import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import SignIN from '../screen/SignIn';
// import AuthNumber from '../screen/AuthNumber';
// import SignInHome from '../screen/SignHome';
// import ConfirmCode from '../screen/ConfirmCode';
// import SignUpStep1 from '../screen/register/Step1';
// import Profile from '../screen/Profile';
import Home from '../screens/Home';
// import Logout from '../screen/Logout';
// import DataSave from '../screen/DataSave';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabNavigator from './TabNavigator';
// import ForgetPassword from '../screen/forgetPassword';
// import Verification from '../screen/forgetPassword/Verification';
// import NewPassword from '../screen/forgetPassword/NewPassword';
const Stack = createStackNavigator();
// const Tab = createMaterialTopTabNavigator();

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <>
        <Stack.Screen name="Root" component={TabNavigator} />
      </>
    </Stack.Navigator>
  );
};

export default function Nav() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
