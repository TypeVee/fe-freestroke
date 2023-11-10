import { StyleSheet, Text, View } from 'react-native';
import AddLocationButtonHome from './AddLocationButtonHome';


export default function AddLocationHome({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Know a cool swim spot?</Text>
        <AddLocationButtonHome navigation={navigation}/>
      </View>
    );
  }

 