import {  StyleSheet, View ,Text, Image} from 'react-native';
import { AddLocationButton } from '../Locations';
import MapView, { Callout, Marker } from 'react-native-maps';
import { useEffect, useState } from 'react';
import { getLocations } from '../../api';


export default function MapTab({navigation}) {

  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
getLocations()
.then(({locations})=>{
  setLocationData(locations)
  setLoading(false)
})
  },[])

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
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
          
  {locationData.map((location)=>{


         const string = JSON.stringify(location)
         const parsed = JSON.parse(string)

           return  <Marker 
          key={parsed.id}
          coordinate={{latitude: parsed.coordinates[1], longitude: parsed.coordinates[0]}}  >
            <Callout>
              
            <Text style={{fontWeight: "bold"}}>
               {parsed.location_name}
            </Text>
            
            </Callout>
            </Marker>
          })}
      
      </MapView>
 
        <AddLocationButton navigation={navigation}/>
      </View>
    
  
    )



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
  