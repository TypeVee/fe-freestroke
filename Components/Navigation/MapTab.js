import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AddLocationButton } from '../Locations';

export default function MapTab({navigation}) {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Map Here</Text>
            <AddLocationButton navigation={navigation}/>
        </View>
    )
}