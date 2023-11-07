import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AddLocationButton({navigation}) {

    const handlePress = () => {
        navigation.navigate('Add Location Map');
      };

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <TouchableOpacity onPress={handlePress}>
    <Text>+ Button</Text>
  </TouchableOpacity>
      </View>
    );
  }

 