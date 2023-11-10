import {  Button, StyleSheet, View ,Text} from 'react-native';
import { AddLocationButton } from '../Locations';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { getLocations } from '../../api';


export default function MapTab({navigation}) {

  const [userLocation, setUserLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

Location.requestForegroundPermissionsAsync().then((status)=>{
if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return
      }}).then(()=>{
       return Location.getCurrentPositionAsync({});
      }).then((response)=>{
        setUserLocation(response);
      })}
  , []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (userLocation) {
    text = JSON.stringify(userLocation);
  }

  useEffect(()=>{
getLocations().then(({locations})=>{
  setLocationData(locations)
  setLoading(false)
})
  },[])


if(!loading){
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
  {locationData.map((location)=>{

         const string = JSON.stringify(location)
         const parsed = JSON.parse(string)

           return  <Marker coordinate={{latitude: parsed.coordinates[1], longitude: parsed.coordinates[0]}}/>
        
          })}
      
      </MapView>
 
        <AddLocationButton navigation={navigation}/>
      </View>
    
  
    )
}


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });
  