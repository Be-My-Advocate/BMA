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
          <FontAwesomeIcon icon="home" color={tintColor}/>
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
    // Login: {
    //   screen: LoginScreen,
    //   navigationOptions: {
    //     tabBarIcon: ({ tintColor }) => (
    //       <FontAwesomeIcon icon="coffee" color={tintColor}/>
    //     )
    //   }
    // },
    // Login: {
    //   screen: LoginScreen,
    //   navigationOptions: {
    //     tabBarIcon: ({ tintColor }) => (
    //       <FontAwesomeIcon icon="coffee" color={tintColor}/>
    //     )
    //   }
    // },
    // Login: {
    //   screen: LoginScreen,
    //   navigationOptions: {
    //     tabBarIcon: ({ tintColor }) => (
    //       <FontAwesomeIcon icon="coffee" color={tintColor}/>
    //     )
    //   }
    // },
  },
  {
    initialRouteName: 'Advocate',
    navigationOptions:  {
      title: 'Advocate',
      headerLeft: null,
      gesturesEnabled: false,
    },
    tabBarOptions: {
      inactiveBackgroundColor: '#4B0082',
      inactiveTintColor: 'white',
      headerTintColor: '#4B0082',
      activeTintColor: '#4B0082'
    }
  }
);

export default createAppContainer(AdvocateNavBar);
