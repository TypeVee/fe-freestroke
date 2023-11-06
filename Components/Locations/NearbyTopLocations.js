import { StyleSheet, Text, View } from 'react-native';
import LocationCard from './LocationCard';


export default function NearbyTopLocations() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Nearby top locations!</Text>
        <LocationCard />
      </View>
    );
  }
