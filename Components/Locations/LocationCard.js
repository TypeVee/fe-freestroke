import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
 
export default function LocationCard({navigation, location_id}) {

  // , location_img_url , location_name
  // const handlePress = () => {
  //   navigation.navigate('Single Location');
  // };
console.log(navigation ,location_id,"<<<<<<<IN LOCATION CARD")
    return (
      <TouchableOpacity
       style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      //  onPress={handlePress}
       >
        <Text>Location Card</Text>
      </TouchableOpacity>
    );
  }

 