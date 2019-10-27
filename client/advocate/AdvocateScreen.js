import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import {genericData} from '../genericUserData'
import BottomNavBar from '../AdvocateNavBar'


const styles = StyleSheet.create({
  thing: {
    flex: 5,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const AdvocateScreen = () => {
  return <View style={styles.thing}>
      <View>
       <Text>Advocate Portal</Text>
        <Text>Welcome, {genericData.advocateObject.fname}</Text>
      </View>

    </View>
}


export default AdvocateScreen