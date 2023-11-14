import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import SingleLocation from './SingleLocation';


export default function SavedLocationCard({navigation, location}) {
  
  const handlePress = () => {
    navigation.navigate('Single Location', location.location_id);}

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity 
        onPress={handlePress}
        style={{ width:300, borderWidth: 3, BorderColor: 'rgb(0, 0, 0)', textAlign: 'center' }}>
          <Text style={{color:"black", textAlign: 'center'}}>{location.location_name}</Text>
          <Text style={{color:"grey", textAlign: 'center'}}>{location.location_area}</Text>
        </TouchableOpacity>
      </View>
    );
  }
