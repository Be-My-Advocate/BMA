import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {genericData} from '../genericUserData'
import SearchBar from '../reusables/SearchBar'

const styles = StyleSheet.create({

});

const RecordsScreen = () => {
  const [searchText, setSearchText] = React.useState('')

  return <View>
    <SearchBar searchText={searchText} setSearchText={setSearchText}/>
    <Text>Records!</Text>
  </View>
}

export default RecordsScreen