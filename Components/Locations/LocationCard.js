import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function LocationCard({navigation}) {

 
  const handlePress = () => {
    navigation.navigate('Single Location');
  };

    return (
      <TouchableOpacity
       style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
       onPress={handlePress}
       >
        <Text>Location Card</Text>
      </TouchableOpacity>
    );
  }

 