import { StyleSheet, Text,  View } from 'react-native';
import ReviewCard from './ReviewCard';

export default function ReviewContainer() {
   
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Reviews!</Text>
        <ReviewCard />
      </View>
    )
  }