import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SingleLocation from './SingleLocation';

export default function SavedLocationCard({navigation}) {
       
  const handlePress = () => {
    navigation.navigate('Single Location');}

    return (

      <TouchableOpacity 
      onPress={handlePress}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Saved Location Card!</Text>
      </TouchableOpacity>
    );
  }
