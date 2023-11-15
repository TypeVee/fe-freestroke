import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { Rating } from '@kolking/react-native-rating';

 
export default function LocationCard({navigation, location_id, distance, location_img_url, location_name, avg_rating, location_area}) {
  

  const handlePress = () => {
    navigation.navigate('Single Location', location_id);
  };
  
    return (
      <TouchableOpacity
       style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
       onPress={handlePress}
       >

      <View style={styles.container}>
        <Image 
        style={styles.image}
        source={{uri: `${location_img_url}` }}
        />
      
      <View style={styles.textAndReviewContainer} >
      <View style={styles.textContainer}> 

     
        <Text style={styles.textName}>{location_name}</Text>
        <Text style={styles.textArea}>{location_area}</Text>    
        <Text style={styles.textDistance}>{(distance/1000).toFixed(2)}  km</Text>
        
       
       </View>

        <View style={styles.starContainer}>
        <Rating size={17} rating={avg_rating} fillColor='#4578DE' disabled={true}/>
        </View>
        </View>
        </View>
      </TouchableOpacity>
    );
  }

 const styles = StyleSheet.create({
    image: {
      borderRadius: 20,
      margin: 10,
      width:280,
      height:280
    }, 
    container: {
      backgroundColor: '#f0f0f0',
      position: 'relative'
    },
    textContainer: {
      color: 'white',
      position: 'absolute',
      bottom: 30,
      left: 30,
    },
    textName: {
      color: 'white',
      fontSize: 18,

    },
    textArea: {
      color: 'black'
    },
    textDistance: {
      color: 'white'
    },
    starContainer: {
      position: 'absolute',
      bottom: 260,
      right: 30,
    }, 
    textAndReviewContainer: {
      backgroundColor: 'black'
    }
 })