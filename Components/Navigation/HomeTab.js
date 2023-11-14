import { StyleSheet, Text, View , Button} from 'react-native';
import {AddLocationHome, TopLocations , NearbyLocations }from '../Locations/index';
import SwimmingAdvice from '../index';
import { useUser } from '../Navigation/AccountSetup/UserContext';



export default function HomeTab({navigation, route}) {
  const user = useUser();
  const {userLocation} = route.params
  console.log(userLocation, 'home')
  console.log(userLocation.coords.latitude,"<<<<<<<")
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <NearbyLocations navigation={navigation} userLocation={userLocation}/>
        <TopLocations  navigation={navigation}/>
        <Button title="All Locations"> </Button>
        <SwimmingAdvice />
        <AddLocationHome navigation={navigation}/>
      </View>
    );
  }

 