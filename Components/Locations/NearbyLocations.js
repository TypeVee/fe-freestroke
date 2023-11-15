import { StyleSheet, Text, View } from 'react-native';
import LocationCard from './LocationCard';
import { useEffect, useState } from 'react';
import { getDistance } from 'geolib'
import { getLocations } from '../../api';
import { ScrollView } from 'react-native-gesture-handler';

export default function NearbyLocations({navigation , userLocation}) {

  const [closestLocations, setClosestLocations] = useState([])
  const [loadingNearbyLocations, setLoadingNearbyLocations] = useState(true);
  
const userLatitude = userLocation.coords.latitude
const userLongitude = userLocation.coords.longitude

  useEffect(()=>{
getLocations().then(({locations})=>{

  const allLocationsDistance = locations.map((location)=>{

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

return (
<ScrollView horizontal={true} style={{ flexDirection: 'row', margin: 10}}>
{closestLocations.map((location) => {
   return <LocationCard
    key={location._id}
    navigation={navigation}
    location_area={location.location_area}
    location_id={location.location_id}
    location_name={location.location_name}
    location_img_url={location.location_img_url}
    distance={location.distance}
  />
})}
</ScrollView>
);
}





