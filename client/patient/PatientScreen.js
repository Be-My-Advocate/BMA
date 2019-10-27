import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList} from 'react-native'
import {genericData} from '../genericUserData'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import SearchBar from '../reusables/SearchBar'

const styles = StyleSheet.create({
  image: {width: 100, height: 100, borderColor: 'pink', borderWidth: 1, borderRadius: 8},
  mainText: {
    fontWeight: '500',
  },
  secondaryText: {
    fontWeight: '300',
    color: '#5a5b5c'
  },
  textFlex: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  border: {
    borderWidth: 1,
    borderColor: '#4B0082',
    borderRadius: 8,
    backgroundColor: '#4B0082',
    marginTop: 10,
    marginRight:20,
    marginLeft: 20,
    padding: 5,

  },
  calendarBubble: {
    textAlign: 'center',
    fontWeight: '500',
    color: 'white',
  }
});

const PatientScreen = () => {
  const [searchText, setSearchText] = React.useState('')

  return <View>
    <SearchBar searchText={searchText} setSearchText={setSearchText}/>

    <View style={styles.textFlex}>
      <Text style={styles.mainText}>Recommended For You</Text>
      <Text style={styles.secondaryText}>View All</Text>
    </View>

    <View style={styles.textFlex}>
      <FontAwesomeIcon icon={'chevron-left'} size={20} color={'#aaa'}/>
      <Image source={require('../images/potato.jpeg')}
             style={styles.image}
      />
      <Image source={require('../images/potato.jpeg')}
             style={styles.image}
      />
      <Image source={require('../images/potato.jpeg')}
             style={styles.image}
      />
      <FontAwesomeIcon icon={'chevron-right'} size={20} color={'#aaa'}/>
    </View>

    <View>
      <FlatList data={genericData.calendarData} renderItem={({item}) => <View>
        <View style={{margin: 10}}>
          <Text>{item.date}</Text>
          <View style={styles.border}><Text style={styles.calendarBubble}>{item.data}</Text></View>
        </View>
      </View>} keyExtractor={item => item.data}
      />
    </View>
  </View>
}

export default PatientScreen