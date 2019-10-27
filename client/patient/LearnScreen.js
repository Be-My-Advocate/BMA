import React from 'react'
import {StyleSheet, Text, View, ScrollView, FlatList, Image, TextInput} from 'react-native'
import {genericData} from '../genericUserData'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import SearchBar from '../reusables/SearchBar'

const styles = StyleSheet.create({
  image: {width: 100, height: 100, borderColor: 'pink', borderWidth: 1, borderRadius: 8},
  pictureFlex: {
    flexDirection: 'row',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    margin: 4,
  },
  purple: {
    backgroundColor: '#4B0082',
  },
  inputStyle: {
    padding: 10,
    flex: 1,
  },
  iconStyle: {
    marginRight: 7,
  },
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
});

const LearnScreen = () => {
  const [searchText, setSearchText] = React.useState('')

  return <View>
    <SearchBar searchText={searchText} setSearchText={setSearchText}/>

    <View style={styles.textFlex}>
      <Text style={styles.mainText}>Recommended For You</Text>
      <Text style={styles.secondaryText}>View All</Text>
    </View>
  <ScrollView>

    <FlatList style={styles.pictureFlex} data={genericData.learnData} renderItem={({item}) => <View>
      <Image source={require('../images/potato.jpeg')}
             style={styles.image}
      />
      <Text>{item}</Text>
    </View>} keyExtractor={item => item.data}
    />
  </ScrollView>
  </View>
}

export default LearnScreen