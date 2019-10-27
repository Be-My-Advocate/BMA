import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {genericData} from '../genericUserData'

const styles = StyleSheet.create({

});

const LearnScreen = () => {
  return <View>
    <Text>Learning! {genericData.patientObject.fname}</Text>
  </View>
}

export default LearnScreen