import { StyleSheet, Text, View } from 'react-native';
import LocationCard from './LocationCard';
import { useEffect, useState } from 'react';
import { getLocations } from '../../api';
import { ScrollView } from 'react-native-gesture-handler';


export default function TopLocations({navigation}) {

const [topRatedLocations, setTopRatedLocations] = useState([])
const [loadingTopRatedLocations, setLoadingTopRatedLocations] = useState(true)

useEffect(()=>{
  getLocations()
  .then(({locations})=>{
    
    const sortedTopLocations = locations.sort((a,b)=>a.avg_rating - b.avg_rating)

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

    console.log(topRatedLocations)

    return (
      <ScrollView horizontal={true} style={{ flexDirection: 'row', margin: 10}}>
        {topRatedLocations.map((location)=> {
          return <LocationCard
          navigation={navigation}
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

 