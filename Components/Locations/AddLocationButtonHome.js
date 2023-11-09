import { StyleSheet, View, Pressable } from 'react-native';
import Icon from 'react-native-ico-material-design';

export default function AddLocationButtonHome({navigation}) {

    const handlePress = () => {
        navigation.navigate('Add Location Map');
      };

    return (
      <View>
           <Pressable 
            onPress={handlePress} 
            style={styles.Pressable}
            >
             <Icon name="add-plus-button" height="30" width="30" style={styles.icon} color='gray'/>
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
 