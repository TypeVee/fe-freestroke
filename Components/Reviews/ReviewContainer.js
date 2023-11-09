import { StyleSheet, Text,  View } from 'react-native';
import ReviewCard from './ReviewCard';
import React, { useState, useEffect } from "react";

export default function ReviewContainer() {
  const [reviews, setReviews] = useState([]);
  const [reviewCount, setReviewCount] = useState(0)

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Reviews!</Text>
        <ReviewCard />
      </View>
    )
  }