import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'


const styles = StyleSheet.create({
  container:{
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

const VerifyPhone = (props) => {
  const [phone, setPhone] = React.useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What Is Your Phone Number</Text>
      <TextInput keyboardType={'phone-pad'} onChangeText={setPhone}/>
      <TouchableOpacity style={styles.button} onPress={() => props.setScreen(3)}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default VerifyPhone
