import React from 'react'
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import LoginScreen from './login/LoginScreen'
import AdvocateScreen from './advocate/AdvocateScreen'

const AdvocateNavBar = createBottomTabNavigator(
  {
    Advocate: {
      screen: AdvocateScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon="coffee" color={tintColor}/>
        )
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon="coffee" color={tintColor}/>
        )
      }
    },
  },
  {
    initialRouteName: 'Advocate',
    navigationOptions:  {
      title: 'login',
      headerLeft: null,
      gesturesEnabled: false,
    },
    tabBarOptions: {
      activeTintColor: '#eb6e3d'
    }
  }
);

export default createAppContainer(AdvocateNavBar);
