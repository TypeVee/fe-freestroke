import { StyleSheet, Text, View } from 'react-native';
import AddLocationButton from './AddLocationButton';


export default function AddLocationHome() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Post location container</Text>
        <AddLocationButton />
      </View>
    );
  }

 