import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {StyleSheet, Text, Image, View} from 'react-native'
import {AsyncStorage} from 'react-native';
import { SvgXml } from 'react-native-svg';

import HomeScreen from './HomeScreen'
import LoginScreen from './login/LoginScreen'
import RegisterScreen from './login/RegisterScreen'
import AdvocateNavBar from './AdvocateNavBar'
import PatientNavBar from './PatientNavBar'
import PatientRegister from './login/PatientRegisterScreen'

const styles = StyleSheet.create({
  image: {width: 20, height: 20, borderColor: 'pink', borderWidth: 1, borderRadius: 12},
  textStyle: {color: 'white', marginLeft: 10, fontSize: 20, fontWeight: '600'},
  headerStyle: {flex: 1, flexDirection: 'row', justifyContent: 'flex-start', padding: 10, alignItems: 'center'}
})

const logoSvg = `<svg width="30" height="30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.9751 172.357C32.1703 172.466 33.3927 172.52 34.6422 172.52C62.3222 172.52 86.5622 144.92 107.362 89.72C116.482 90.36 126.642 92.04 137.842 94.76V126.2C137.842 151.32 146.162 163.88 162.802 163.88C168.179 163.88 173.692 162.878 179.342 160.875C161.062 184.666 132.322 200 100 200C73.2333 200 48.9229 189.484 30.9751 172.357ZM3.50034 126.322C1.21811 117.935 0 109.11 0 100C0 44.7715 44.7715 0 100 0C105.53 0 110.955 0.448825 116.24 1.31203C116.227 2.57915 116.147 3.64847 116.002 4.52C109.442 30.44 101.922 53.88 93.4422 74.84C78.8822 75.32 65.6022 77.64 53.6022 81.8C41.6022 85.8 31.8422 90.92 24.3222 97.16C16.9622 103.4 11.2822 110.2 7.28219 117.56C5.71428 120.382 4.45367 123.303 3.50034 126.322ZM173.166 31.8328C173.491 45.2521 173.716 64.6279 173.842 89.96C183.273 94.0642 191.965 98.7642 199.919 104.06C199.973 102.713 200 101.36 200 100C200 73.6574 189.814 49.6937 173.166 31.8328ZM197.545 122.12C190.435 116.364 182.614 111.244 174.082 106.76C174.402 115.88 175.282 123.56 176.722 129.8C178.962 140.04 181.602 145.16 184.642 145.16C186.095 145.16 187.767 144.887 189.656 144.342C193.117 137.358 195.786 129.911 197.545 122.12ZM42.3222 108.44C54.3222 97.24 69.3622 90.92 87.4422 89.48C68.2422 132.84 50.9622 154.52 35.6022 154.52C28.0822 154.52 24.3222 149.64 24.3222 139.88C24.3222 130.12 30.3222 119.64 42.3222 108.44ZM133.282 9.55999C134.242 9.55999 134.882 9.63999 135.202 9.79999C136.962 16.36 137.842 39.32 137.842 78.68C128.882 76.92 120.482 75.8 112.642 75.32C123.682 43.8 129.922 21.96 131.362 9.79999C131.682 9.63999 132.322 9.55999 133.282 9.55999Z" 
fill="white"/>
</svg>`;

const AppNavigator = createStackNavigator(
  {
    screen: HomeScreen,
    login: LoginScreen,
    register: RegisterScreen,
    patientRegister:PatientRegister,
    patient: PatientNavBar,
    advocate: AdvocateNavBar,
  },
  {
    initialRouteName: 'patient',
    defaultNavigationOptions: {
      headerTitle: () => <View style={styles.headerStyle}>
        <SvgXml xml={logoSvg}/>
        <Text style={styles.textStyle}>
               Be My Advocate
        </Text>
      </View>,
      headerStyle: {
        backgroundColor: '#4B0082',
        fontcolor: 'white'
      },
    },
    navigationOptions:  {
      title: 'login',
      headerBackTitle: null,
      headerLeft:null,
      gesturesEnabled: false,
    }
  }
);


export default createAppContainer(AppNavigator)
