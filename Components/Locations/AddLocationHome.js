import { StyleSheet, Text, View } from 'react-native';
import AddLocationButton from './AddLocationButton';


export default function AddLocationHome({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Post location container</Text>
        <AddLocationButton navigation={navigation}/>
      </View>
    );
  }

 