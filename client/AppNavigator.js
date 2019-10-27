import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen'
import LoginScreen from './login/LoginScreen'
import RegisterScreen from './login/RegisterScreen'
import AdvocateNavBar from './AdvocateNavBar'
import PatientNavBar from './PatientNavBar'

const AppNavigator = createStackNavigator(
  {
    screen: HomeScreen,
    login: LoginScreen,
    register: RegisterScreen,
    patient: PatientNavBar,
    advocate: AdvocateNavBar,
  },
  {
    initialRouteName: 'screen',
    // headerMode: 'screen'
    navigationOptions:  {
      title: 'login',
      headerLeft: null,
      gesturesEnabled: false,
    }
  }
);


export default createAppContainer(AppNavigator)