import { StyleSheet, Text, View } from 'react-native';
import LocationCard from './LocationCard';


export default function AllLocations({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>All locations!</Text>
        <LocationCard navigation={navigation}/>
      </View>
    );
  }

 