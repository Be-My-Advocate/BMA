import React from 'react'
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import RegisterScreen from './login/RegisterScreen'
import LoginScreen from './login/LoginScreen'
import PatientScreen from './patient/PatientScreen'

const PatientNavBar = createBottomTabNavigator(
  {
    Patient: {
      screen: PatientScreen,
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
    initialRouteName: 'Patient',
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

export default createAppContainer(PatientNavBar)