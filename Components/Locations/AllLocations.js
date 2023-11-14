import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { getLocations } from '../../api';

export default function AllLocations({ navigation }) {
  const [locationData, setLocationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchLocations();
  }, [page]);

  const fetchLocations = () => {
    setLoading(true);
    const itemsPerPage = 15;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    getLocations(page)
      .then(({ locations }) => {
        const locationsForPage = locations.slice(startIndex, endIndex);

        setLocationData(locationsForPage);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleLoadPrevious = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          locationData.map((location, index) => (
            <View key={index} style={styles.locationCard}>
              <Text style={styles.locationName}>{location.location_name}</Text>
              <Image
                source={{ uri: location.location_img_url }}
                style={styles.locationImage}
              />
              <Text style={styles.locationInfo}>Location Name: {location.location_name}</Text>
              <Text style={styles.locationInfo}>Area: {location.location_area}</Text>
              {location.water_classification && (
                <Text style={styles.locationInfo}>{`Water Classification: ${location.water_classification}`}</Text>
              )}
              {location.water_classification_date && (
                <Text style={styles.locationInfo}>{`Water Classification Date: ${location.water_classification_date}`}</Text>
              )}
              <Button title="More" onPress={() => navigation.navigate('Single Location')} />
            </View>
          ))
        )}
        {!loading && page > 1 && (
          <Button title="Previous Page" onPress={handleLoadPrevious} style={styles.button} />
        )}
        {!loading && (
          <Button title="Next Page" onPress={handleLoadMore} style={styles.button} />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    marginBottom: 20,
  },
  locationCard: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    elevation: 2, // Add elevation for Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  locationName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  locationImage: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  locationInfo: {
    marginBottom: 5,
  },
  button: {
    marginVertical: 10,
  },
});
