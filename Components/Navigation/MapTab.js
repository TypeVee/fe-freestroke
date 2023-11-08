import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AddLocationButton } from '../Locations';
import MapView from 'react-native-maps';



export default function MapTab({navigation}) {
    
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
    
        />
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
  