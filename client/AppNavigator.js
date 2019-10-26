import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen'
import LoginScreen from './login/LoginScreen'
import RegisterScreen from './login/RegisterScreen'
import PatientScreen from './patient/PatientScreen'
import AdvocateScreen from './advocate/AdvocateScreen'

const AppNavigator = createStackNavigator(
  {
    screen: HomeScreen,
    login: LoginScreen,
    register: RegisterScreen,
    patient: PatientScreen,
    advocate: AdvocateScreen,
  },
  {
    initialRouteName: 'screen',
  }
);


export default createAppContainer(AppNavigator)