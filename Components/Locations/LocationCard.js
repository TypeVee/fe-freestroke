import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
 
export default function LocationCard({navigation, location_id, distance}) {

 
  const handlePress = () => {
    navigation.navigate('Single Location', location_id);
  };
  
console.log(location_id,"<<<<<<<IN LOCATION CARD")
    return (
      <TouchableOpacity
       style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
       onPress={handlePress}
       >
        <Text>Location Card</Text>
        {/* <Text>distance: {distance/1000} </Text> */}
      </TouchableOpacity>
    );
  }

 