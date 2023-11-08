import { StyleSheet, Text, View } from 'react-native';
import ConfirmLocationButton from '../Locations/ConfirmLocationButton';

export default function AddLocationMap({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Map to add location</Text>
        <ConfirmLocationButton navigation={navigation}/>
      </View>
    );
  }

 