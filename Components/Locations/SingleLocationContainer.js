import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { StarRating } from './StarRating';
import SavedUnfilled from '../../assets/Saved.jpeg'
import SavedFilled from '../../assets/SavedFilled.jpeg'
import {saveLocation, unsaveLocation, findID} from '../../localDatabase/database.js'

export default function SingleLocationContainer({ location, reviewCount, averageRating }) {
  const [savedClicked, setSavedClicked] = useState(false)
  const [visitedClicked, setVisitedClicked] = useState(false)

  const waterDate = new Date(location.water_classification_date);

  const formattedWaterDate = waterDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  useEffect(()=>{
    findID(location.location_id).then((res)=>{
      if(JSON.parse(res).length === 1){
        console.log
        setSavedClicked(true)
      } else setSavedClicked(false)
    })
  }, [])

  const handleSave = () => {
    if(savedClicked === false){
      saveLocation(location).then((res)=>{
        setSavedClicked(true)
      })
      
    }
    else {
      unsaveLocation(location.location_id).then((res)=>{
        setSavedClicked(false)
      })
      
    }
  }

  const handleDirections = () => {
    // Millie to do
  }

  const handleVisited = () => {
    setVisitedClicked(!visitedClicked)
    // Visited button
  }
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.header}>{location.location_name}</Text>

      <View style={styles.ratingContainer}>
        <View style={styles.starRating}>
          <StarRating
            rating={averageRating !== null ? averageRating : 0}
          />
          <Text style={styles.startext}>
            {averageRating !== null ? averageRating : 'No Ratings yet'}
          </Text>
        </View>
        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Image
            source={savedClicked ? SavedFilled : SavedUnfilled}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>

      <Image source={{ uri: location.location_img_url }} style={{ width: 350, height: 250 }} />
      <View style={styles.directionsShare}>
        <TouchableOpacity onPress={handleDirections}>
          <Text style={styles.textDirectionsShare}>&nbsp;&nbsp;Click for directions</Text>
        </TouchableOpacity>
      </View>

      <View style={visitedClicked ? styles.visitedClicked : styles.visited}>
        <TouchableOpacity onPress={handleVisited}>
          <Text style={styles.textVisited}>{visitedClicked ? 'Visited' : 'Visited?'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.header2}>Swim Spot Information</Text>
        <Text style={styles.text}>{location.body}</Text>
      </View>

      {location.water_classification !== null && (
        <View style={styles.waterQualityContainer}>
          <Text style={styles.header2}>Water Quality</Text>
          <Text style={styles.text}>{`Water Quality Classification: ${location.water_classification}`}</Text>
          <Text style={styles.text}>{`Date of testing: ${formattedWaterDate}`}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  header2: {
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
    fontSize: 16
  },
  directionsShare: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: 350,
    marginLeft: 21,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: '#A8DCFA'
  },
  textDirectionsShare: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1937E0'
  },
  visited: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 22,
    borderRadius: 3,
    borderColor: 'black',
    padding: 5,
    borderWidth: 1,
    marginTop: 5,
    backgroundColor: '#C3C3C3'
  },
  visitedClicked: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 22,
    borderRadius: 3,
    borderColor: 'black',
    padding: 5,
    borderWidth: 1,
    marginTop: 5,
    backgroundColor: 'grey'
  },
  textVisited: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  infoContainer: {
    alignSelf: 'flex-start',
    marginHorizontal: 20
  },
  waterQualityContainer: {
    marginTop: 10,
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginBottom: 10
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 22,
    marginBottom: 5,
    width: 350
  },
  starRating: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  startext: {
    color: '#489fe1',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 4,
  },
});
