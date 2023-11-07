import { StyleSheet, Text, View } from 'react-native';
import SingleLocationContainer from './SingleLocationContainer';
import ReviewContainer from '../Reviews/index';


export default function SingleLocation (){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Single Location details</Text>    
        <SingleLocationContainer />
        <ReviewContainer />
        </View>
    )
}