import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import FavoriteScreen from '../screens/Favorite';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

const TabsDetails = [
  {
    name: 'Home',
    screen: HomeScreen,
    icon: 'home',
  },
  {
    name: 'Search',
    screen: SearchScreen,
    icon: 'search',
  },
  {
    name: 'Favorite',
    screen: FavoriteScreen,
    icon: 'favorite-outline',
  },
];

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      {TabsDetails.map(e => {
        return (
          <Tab.Screen
            key={e.name}
            name={e.name}
            component={e.screen}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Icon
                    name={e.icon}
                    color={focused ? '#5f5c5c' : '#b1b1b1'}
                    size={30}
                  />
                );
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;
