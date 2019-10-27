import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Dimensions} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { genericData } from '../genericUserData'
import MapView from 'react-native-maps'
import {Marker} from 'react-native-maps'



const styles = StyleSheet.create({
  flexRow: {
    height: '5%',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  flexStart: {
    flexDirection: 'row',
    padding: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  container: {
    height: '95%',
    backgroundColor: '#fff',
  },
  advocateText: {
    margin: 10,
  },
  flexCol: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  textBox: { margin: 5, height: 30, flex: 1, borderColor: 'gray', borderWidth: 1 },
});

const DirectoryScreen = () => {
  const [mapView, setMapView] = React.useState(false)
  const [searchText, setSearchText] = React.useState('')
  const [region, setRegion] = React.useState({
    latitude: genericData.vegasLocation.lat,
    longitude: genericData.vegasLocation.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  const [data, setData] = React.useState(genericData.advocateLocationArray)

  return <View style={styles.flexCol}>
    <View style={styles.flexRow}>
      <TextInput style={styles.textBox} onChangeText={(text) => {setSearchText(text)}} value={searchText}/>
      <TouchableOpacity onPress={() =>setMapView(!mapView)}>
        {mapView
          ? <FontAwesomeIcon icon={'map'} color={'#4B0082'} size={30}/>
          : <FontAwesomeIcon icon={'list'} color={'#4B0082'} size={30}/>
        }
      </TouchableOpacity>
    </View>
    {mapView
      ? <View style={styles.container}>
          <MapView style={styles.mapStyle}
                   initialRegion={{
                     latitude: genericData.vegasLocation.lat,
                     longitude: genericData.vegasLocation.lng,
                     latitudeDelta: 0.0922,
                     longitudeDelta: 0.0421}}
           region={region}
          >
            {data.map((user) => {
              const latlong = {latitude: user.location.lat, longitude:user.location.lng}
              return (
                <Marker
                  coordinate={latlong}
                  title={`${user.lname}, ${user.fname}`}
                />
              )
            })}
          </MapView>
        </View>

      : <View style={styles.container}>
        {
          <FlatList data={data} renderItem={({item}) => <View style={styles.flexStart}>
            <FontAwesomeIcon icon={'user'} color={'#4B0082'} size={30}/>
            <View style={styles.advocateText}>
              <Text>{item.fname}</Text>
              <Text>{item.email}</Text>
              <Text>{item.role}</Text>
            </View>
          </View>} keyExtractor={item => item.email}
          />

        }
        </View>
    }
  </View>
}

export default DirectoryScreen
