import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { StarRating } from './StarRating';
import SavedUnfilled from '../../assets/Saved.jpeg'
import SavedFilled from '../../assets/SavedFilled.jpeg'

export default function SingleLocationContainer({ location, reviewCount, averageRating }) {
  const [savedClicked, setSavedClicked] = useState(false)

  const waterDate = new Date(location.water_classification_date);

  const formattedWaterDate = waterDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const handleSave = () => {
    setSavedClicked(!savedClicked)
    // @Vee - Logic here for saving location. location_id is location.location_id
  }

  const handleDirections = () => {
    // If we want this
  }

  const handleShare = () => {
    // If we want this
  }

  const handleDownload = () => {
    // If we want this
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
          <Text style={styles.textDirectionsShare}>&nbsp;&nbsp;Directions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare}>
          <Text style={styles.textDirectionsShare}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDownload}>
          <Text style={styles.textDirectionsShare}>Download&nbsp;&nbsp;</Text>
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
    marginLeft: 22,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: '#A8DCFA'
  },
  textDirectionsShare: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1937E0'
  },
  infoContainer: {
    marginTop: 20,
    alignSelf: 'flex-start',
    marginHorizontal: 20,
  },
  waterQualityContainer: {
    marginTop: 20,
    alignSelf: 'flex-start',
    marginHorizontal: 20,
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
