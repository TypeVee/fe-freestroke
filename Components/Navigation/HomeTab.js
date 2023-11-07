import { StyleSheet, Text, View } from 'react-native';
import {AddLocationHome, AllLocations , NearbyTopLocations }from '../Locations/index';
import SwimmingAdvice from '../index';



export default function HomeTab({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <NearbyTopLocations navigation={navigation}/>
        <AllLocations  navigation={navigation}/>
        <SwimmingAdvice />
        <AddLocationHome navigation={navigation}/>
      </View>
    );
  }

 