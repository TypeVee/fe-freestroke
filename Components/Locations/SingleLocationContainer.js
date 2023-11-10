import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';

export default function SingleLocationContainer({ location }) {
  const waterDate = new Date(location.water_classification_date);
  const formatted_water_date = waterDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.header}>{location.location_name}</Text>
      <Image source={{ uri: location.location_img_url }} style={{ width: 350, height: 250 }} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.header2}>Swim Spot Information</Text>
        <Text style={styles.text}>{location.body}</Text>
      </View>

      {location.water_classification !== null && (
        <View style={styles.waterQualityContainer}>
          <Text style={styles.header2}>Water Quality</Text>
          <Text style={styles.text}>{`Water Quality Classification: ${location.water_classification}`}</Text>
          <Text style={styles.text}>{`Date of testing: ${formatted_water_date}`}</Text>
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
    marginBottom: 10
  },
  header2: {
    fontWeight: 'bold',
    marginTop: 10,
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
});
