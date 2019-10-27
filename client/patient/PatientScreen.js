import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {genericData} from '../genericUserData'

const styles = StyleSheet.create({

});

const PatientScreen = () => {
  return <View>
    <Text>Patient Portal {genericData.patientObject.fname}</Text>
    <Text>Welcome, {genericData.patientObject.fname}</Text>
  </View>
}

export default PatientScreen