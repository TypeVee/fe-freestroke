import { StyleSheet, View, Pressable } from 'react-native';
import Icon from 'react-native-ico-material-design';

export default function AddLocationButton({navigation}) {

    const handlePress = () => {
       navigation.navigate('Add Location Map'); 
      };

    return (
      <View style={{position: 'absolute', top: 180, right:40}}>
           <Pressable 
            onPress={handlePress} 
            style={styles.Pressable}
            >
             <Icon name="add-plus-button" height="40" width="40" style={styles.icon} color='gray'/>
          </Pressable>  
      </View>
    );
  }

  const styles = StyleSheet.create({
    Pressable: {
      borderColor: 'darkgrey',
      borderWidth: 2,
      borderRadius: 40,
      backgroundColor: 'white'
    },
    icon: {
      margin: 10,
    }
  })
 