import { StyleSheet, Text, View } from 'react-native';
import {AddLocationHome, AllLocations , NearbyTopLocations }from '../Locations/index';
import SwimmingAdvice from '../index';
import { useUser } from '../Navigation/AccountSetup/UserContext';



export default function HomeTab({navigation, route}) {
  const user = useUser();
  console.log("HELLO", user);
  const {userLocation} = route.params
  console.log(userLocation, 'home')

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

 