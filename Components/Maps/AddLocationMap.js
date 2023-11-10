import { StyleSheet, Text, View } from 'react-native';
import ConfirmLocationButton from '../Locations/ConfirmLocationButton';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-ico-material-design';

export default function AddLocationMap({navigation}) {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [draggableLocation, setDraggableLocation] = useState({latitude:55.3781,longitude:-3.4360});
  const [markerText, setMarkerText] = useState("Hold and drag to select location");

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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <MapView 
        style={styles.map} 
        initialRegion={{
            latitude: 54.7023545,
            longitude: -4.2765753,
            latitudeDelta: 13,
            longitudeDelta: 13,
        }}

        showsUserLocation={true}>
          <Marker coordinate={draggableLocation} 
          draggable
          onDragStart={(e)=>setMarkerText(null)}
          onDragEnd={(e)=>setDraggableLocation(e.nativeEvent.coordinate)}>
            <View style={styles.marker}>
            <Text>{markerText}</Text>
           <Icon name="map-placeholder" color='red' height="40" width="40"/>
          </View>
          </Marker>
        </MapView>
        <ConfirmLocationButton draggableLocation={draggableLocation} navigation={navigation}/>
      </View>
    );
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
    marker: {
   alignItems: "center",

    },
    
  });
  