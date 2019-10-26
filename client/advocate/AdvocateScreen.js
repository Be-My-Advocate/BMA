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

const AdvocateScreen = () => {
  return <View>
    <Text>Advocate Portal</Text>
    <Text>Welcome, {genericData.advocateObject.fname}</Text>
  </View>
}

export default AdvocateScreen