import { StyleSheet, Text, View , Button} from 'react-native';
import {AddLocationHome, TopLocations , NearbyLocations }from '../Locations/index';
import SwimmingAdvice from '../index';
import { useUser } from '../Navigation/AccountSetup/UserContext';
import { ScrollView } from 'react-native-gesture-handler';



export default function HomeTab({navigation, route}) {

 const user = useUser();
  const {userLocation} = route.params

  function handlePress () {
    navigation.navigate('All Locations')
  }
  
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContainer} >
        <Text>Nearby Locations</Text>
        <NearbyLocations navigation={navigation} userLocation={userLocation}/>
        <Text>Top Rated Locations</Text>
        <TopLocations  navigation={navigation} userLocation={userLocation}/>
        <Button onPress={handlePress} title="All Locations"> </Button>
        <SwimmingAdvice />
        <AddLocationHome navigation={navigation}/>
      </ScrollView>
    );
  }



 const styles = StyleSheet.create({
  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
 })