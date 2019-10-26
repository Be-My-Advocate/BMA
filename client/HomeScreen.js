

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to BMA</Text>
      <TouchableOpacity onPress={() => props.navigation.push('login')}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.push('register')}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen