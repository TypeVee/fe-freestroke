import { StyleSheet, Text, View } from 'react-native';
import LocationCard from './LocationCard';
import { useEffect, useState } from 'react';
import { getDistance } from 'geolib'
import { getLocations } from '../../api';
import { ScrollView } from 'react-native-gesture-handler';

export default function NearbyLocations({navigation , userLocation}) {

  const [closestLocations, setClosestLocations] = useState([])
  const [locationData, setLocationData] = useState([]);
  const [loadingNearbyLocations, setLoadingNearbyLocations] = useState(true);
  
const userLatitude = userLocation.coords.latitude
const userLongitude = userLocation.coords.longitude

  useEffect(()=>{
getLocations().then(({locations})=>{
  setLocationData(locations)
  const allLocationsDistance = locationData.map((location)=>{

    const locationCopy = {...location}
  
    const stringLocation = JSON.stringify(locationCopy)
    const parsedLocation = JSON.parse(stringLocation)
  
  locationCopy.distance = getDistance({latitude: userLatitude, longitude : userLongitude},{latitude: parsedLocation.coordinates[1], longitude : parsedLocation.coordinates[0]})
  
  return locationCopy
  
  })
  const sortedLocations = allLocationsDistance.sort((a,b)=>a.distance-b.distance)
  
  setClosestLocations(sortedLocations.slice(0,20))
  setLoadingNearbyLocations(false)
  
})
  },[])

if (loadingNearbyLocations) {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  )
} 

console.log(closestLocations,"CLOSEST LOCATIONS")
return (
<ScrollView>
 { closestLocations.map((location)=>{
  {console.log(location.location_id,"<<<<<HERE")}
<LocationCard 
navigation={navigation}
location_id= {location.location_id}

/>
  })}
</ScrollView>
);
}







// console.log(closestLocations,"CLOSEST LOCATIONS")
//     return (
//     <ScrollView>
//      { closestLocations.map((location)=>{
// <LocationCard 
// location_id = {location.location_id}

// />
//       })}
//     </ScrollView>
//     );
//   }


//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//   <Text>Nearby top locations!</Text>
//   {
    
//   }
//   <LocationCard navigation={navigation} 
//   // location_id={location_id}
//   />
// </View>