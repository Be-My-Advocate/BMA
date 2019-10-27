import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import VerifyPhone from './verifyPhone'


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

const InfoScreen = (props) => {
  const [stage, setStage] = React.useState(1)
  return (
    <View style={styles.container}>
      {stage === 1 && <InfoScreen setScreen={setStage}/>}
      {stage === 2 && <VerifyPhone setScreen={setStage}/>}
    </View>
  )
}

export default InfoScreen
