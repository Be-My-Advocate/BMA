import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position:'absolute',
    top:40,
    fontSize:32,
    fontWeight:'700',

  },
  button: {
    width: '70%',
    backgroundColor: '#4B0082',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin:16,
    borderRadius:12,
  },
  buttonText:{
    color:'white',
    margin: 12,
    fontSize: 24,
    fontWeight: '600',
  },
  dialog:{
    fontSize:24,
    fontWeight:'400',
    marginBottom:32,
    width: '60%',
    display:'flex',
    textAlign:'center'
  },
  login:{
    fontSize:18
  }
});

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Be My Advocate</Text>

      <Text style={styles.dialog}>Please Indicate if you are a Patient or a Patient Advocate</Text>

      <TouchableOpacity style={styles.button} onPress={() => props.navigation.push('patientRegister')}>
        <Text style={styles.buttonText}>Im A Patient</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => props.navigation.push('register')}>
        <Text style={styles.buttonText}>Im A Patient Advocate</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.push('login')}>
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen
