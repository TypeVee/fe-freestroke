import {  StyleSheet, View } from 'react-native';
import { AddLocationButton } from '../Locations';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export default function MapTab({navigation}) {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {

Location.requestForegroundPermissionsAsync().then((status)=>{
if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return
      }}).then(()=>{
       return Location.getCurrentPositionAsync({});
      }).then((location)=>{
        setLocation(location);
      })}
  , []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


    return (

        <View style={styles.container}>
        <MapView 
        style={styles.map} 
        initialRegion={{
            latitude: 54.7023545,
            longitude: -4.2765753,
            latitudeDelta: 13,
            longitudeDelta: 13,
        }}
        showsUserLocation={true}>
      
        </MapView>
        <AddLocationButton navigation={navigation}/>
      </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%'
    },
  });
  