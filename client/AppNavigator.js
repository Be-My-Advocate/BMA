import React from 'react'
import HomeScreen from './HomeScreen'
import LoginScreen from './login/LoginScreen'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    screen: HomeScreen,
    login: LoginScreen,
  },
  {
    initialRouteName: 'screen',
  }
  // Login: {
  //   login: LoginScreen,
  //   // register: RegisterScreen,
  // },
  // Patient: {
  //   patientIndex: PatientScreen,
  // },
  // Advocate: {
  //   advocateIndex: AdvocateScreen,
  // }
);


export default createAppContainer(AppNavigator)