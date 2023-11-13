import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ReviewList from './ReviewList';
import React, { useState } from "react";
import PostReview from './PostReview';
import ReviewIcon from '../../assets/Review.png'

export default function ReviewContainer({location_id, setReviewCount, reviewCount, setAverageRating, averageRating}) {
  const [reviews, setReviews] = useState([]);

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.reviewsBanner}
        >
          <Text style={styles.reviewsHeader}>Reviews</Text>
          <View style={styles.reviewCountContainer}>
            <Image source={ReviewIcon} style={{ width: 18, height: 18 }} />
            <Text style={styles.reviewCountText}>{reviewCount}</Text>
          </View>
        </TouchableOpacity>
        <PostReview
          location_id={location_id}
          reviews={reviews}
          setReviews={setReviews}
          reviewCount={reviewCount}
          setReviewCount={setReviewCount}
          averageRating={averageRating}
          setAverageRating={setAverageRating}
        />
        <ReviewList
          reviews={reviews}
          setReviews={setReviews}
          location_id={location_id}
          reviewCount={reviewCount}
          setReviewCount={setReviewCount}
          averageRating={averageRating}
          setAverageRating={setAverageRating}
        />
      </View>
    )
  }

const styles = StyleSheet.create({
  reviewsBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#D6DBFE',
    width: 352,
    height: 30,
    paddingHorizontal: 10,
    justifyContent: 'space-between', 
  },
  reviewCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewsHeader: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17
  },
  reviewCountText: {
    color: '#1937E0',
    fontSize: 17,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    marginHorizontal: 30,
    marginTop: 20
  },
  header2: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 10,
    marginBottom: 10,
  },
})