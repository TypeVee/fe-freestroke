import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ConfirmLocationButton({navigation}) {

    const handlePress = () => {
        navigation.navigate('Post Location');
      };

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <TouchableOpacity onPress={handlePress}>
              <Text>Confirm Location</Text>
          </TouchableOpacity>
      </View>
    );
  }