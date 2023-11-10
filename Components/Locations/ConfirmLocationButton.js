import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ConfirmLocationButton({ draggableLocation ,navigation}) {

    const handlePress = () => {
        navigation.navigate('Post Location', {draggableLocation});
      };
console.log(draggableLocation,"IN BUTTON")
    return (
      <View style={{position: 'absolute', top: 680, justifyContent:'center' }}>
           <TouchableOpacity onPress={handlePress}
           style={styles.touchables}>
              <Text style={styles.text}>Confirm Location</Text>
          </TouchableOpacity>
      </View>
    );
  }



  const styles = StyleSheet.create({
 touchables: {
      borderColor: 'darkgrey',
      borderWidth: 2,
      borderRadius: 12,
      backgroundColor: "#7393B3",
      padding: 18,
    },
   text: {
    color: "white"
    } 
    
  })
 