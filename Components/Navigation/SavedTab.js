import { StyleSheet, Text, View } from 'react-native';
import SavedLocationCard from '../Locations/SavedLocationCard';

export default function SavedTab({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Saved Locations</Text>
            <SavedLocationCard navigation={navigation}/>
        </View>
    )
}