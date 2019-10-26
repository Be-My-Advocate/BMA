

import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to sorking on your app!</Text>
    </View>
  );
}

export default HomeScreen