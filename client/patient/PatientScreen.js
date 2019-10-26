import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {genericData} from '../genericUserData'

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

const PatientScreen = () => {
  return <View>
    <Text>Patient Portal {genericData.patientObject.fname}</Text>
    <Text>Welcome, {genericData.patientObject.fname}</Text>
  </View>
}

export default PatientScreen