import { StyleSheet, Text, View } from 'react-native';
import LocationCard from './LocationCard';
import { useEffect, useState } from 'react';
import { getLocations } from '../../api';
import { ScrollView } from 'react-native-gesture-handler';
import { getDistance } from 'geolib'


export default function TopLocations({navigation, userLocation}) {

const [topRatedLocations, setTopRatedLocations] = useState([])
const [loadingTopRatedLocations, setLoadingTopRatedLocations] = useState(true)

const userLatitude = userLocation.coords.latitude
const userLongitude = userLocation.coords.longitude

useEffect(()=>{
  getLocations()
  .then(({locations})=>{


    const allLocationsDistance = locations.map((location)=>{

      const locationCopy = {...location}

      const stringLocation = JSON.stringify(locationCopy)
      const parsedLocation = JSON.parse(stringLocation)

    locationCopy.distance = getDistance({latitude: userLatitude, longitude : userLongitude},{latitude: parsedLocation.coordinates[1], longitude : parsedLocation.coordinates[0]})

    return locationCopy

    })

    const sortedTopLocations = allLocationsDistance.sort((a,b)=>a.avg_rating - b.avg_rating)

    setTopRatedLocations(sortedTopLocations.slice(-20).reverse())
    setLoadingTopRatedLocations(false)


  })
    },[])

    if (loadingTopRatedLocations) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    } 


    return (
      <ScrollView horizontal={true} style={{ flexDirection: 'row', margin: 10}}>
        {topRatedLocations.map((location)=> {
          return <LocationCard
          navigation={navigation}
          distance={location.distance}
          location_area={location.location_area}
          key={location._id}
          location_img_url={location.location_img_url}
          location_id={location.location_id}
          location_name={location.location_name}
          avg_rating={location.avg_rating}
          />
        })}
      </ScrollView>
    );
  }

 