import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Rating } from '@kolking/react-native-rating';

 
export default function LocationCard({navigation, location_id, distance, location_img_url, location_name, avg_rating}) {
  
  console.log(avg_rating)

  const handlePress = () => {
    navigation.navigate('Single Location', location_id);
  };
  
    return (
      <TouchableOpacity
       style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
       onPress={handlePress}
       >
        <Text>{location_name}</Text>
        <Image 
        style={styles.image}
        source={{uri: `${location_img_url}` }}
        />
        { distance? (
        <Text>{(distance/1000).toFixed(2)}  km</Text>
        ) : (null)
        } 
        <Rating size={10} rating={avg_rating}/>
       
      </TouchableOpacity>
    );
  }

 const styles = StyleSheet.create({
    image: {
      margin: 10,
      width:100,
      height:100
    }
 })