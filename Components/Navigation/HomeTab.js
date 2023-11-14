import { StyleSheet, Text, View , Button} from 'react-native';
import {AddLocationHome, TopLocations , NearbyLocations }from '../Locations/index';
import SwimmingAdvice from '../index';
import { useUser } from '../Navigation/AccountSetup/UserContext';



export default function HomeTab({navigation, route}) {

 const user = useUser();
  const {userLocation} = route.params

  function handlePress () {
    navigation.navigate('All Locations')
  }
  console.log(userLocation, 'home')
  console.log(userLocation.coords.latitude,"<<<<<<<")
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Nearby Locations</Text>
        <NearbyLocations navigation={navigation} userLocation={userLocation}/>
        <Text>Top Rated Locations</Text>
        <TopLocations  navigation={navigation}/>
        <Button onPress={handlePress} title="All Locations"> </Button>
        <SwimmingAdvice />
        <AddLocationHome navigation={navigation}/>
      </View>
    );
  }

 