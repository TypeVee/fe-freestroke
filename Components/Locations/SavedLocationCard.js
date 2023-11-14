import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SingleLocation from './SingleLocation';
import {fetch, saveLocation, createLocationTable} from '../../localDatabase/database'

export default function SavedLocationCard({navigation}) {
  
  fetch('savedLocations').then((res)=>{console.log(res)})
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
