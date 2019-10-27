import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {genericData} from '../genericUserData'
import SearchBar from '../reusables/SearchBar'

const styles = StyleSheet.create({

});

const ConnectScreen = () => {
  const [searchText, setSearchText] = React.useState('')

  return <View>
    <SearchBar searchText={searchText} setSearchText={setSearchText}/>
    <Text>Connecting</Text>
  </View>
}

export default ConnectScreen