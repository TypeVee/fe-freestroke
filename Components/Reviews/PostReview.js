import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Picker} from '@react-native-picker/picker'
import { postReview } from '../../api';
import addReviewIcon from '../../assets/AddReview.png';



export default function PostReview({ location_id, reviews, setReviews, reviewCount, setReviewCount, setAverageRating, averageRating}) {
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(5); 
    const [isAdding, setIsAdding] = useState(false);
    const [postErr, setPostErr] = useState(false);
    const [isPost, setIsPost] = useState(false);
    const user = 'milbot1992';

    const handlePostReview = () => {
        if (reviewText.trim() !== '') {
            setIsAdding(true);

            const reviewToBeAdded = {
                username: user,
                uid: 'uidToBeUpdated',
                body: reviewText,
                rating_for_location: rating,
            };

            postReview(location_id, reviewToBeAdded)
                .then((response) => {
                    const newReview = response.data.review;
                    setReviews([newReview, ...reviews]);
                    setReviewText('');
                    setIsAdding(false);
                    setPostErr('');
                    setIsPost(true);
                    const average_rating = (((averageRating * (reviewCount)) + reviewToBeAdded.rating_for_location) / (reviewCount+1)).toFixed(1);
                    const rounded_average_rating = parseFloat(average_rating);
                    setAverageRating(rounded_average_rating)
                    
                    setTimeout(() => {
                        setReviewCount((currentCount) => Number(currentCount) + 1);
                    }, 2000);
                })
                .catch((error) => {
                    console.log(error);
                    setIsAdding(false);
                    setPostErr('Error posting review');
                    setIsPost(false);
                });
        } else {
            setPostErr('Error posting review - cannot post a blank review');
            setIsPost(false);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => setShowReviewForm(!showReviewForm)}>
                <View style={styles.postReview}>
                    <Image source={addReviewIcon} style={{ width: 40, height: 30 }} />
                    <Text style={styles.postReviewText}>&nbsp;&nbsp;Leave a review</Text>
                </View>
            </TouchableOpacity>

            {showReviewForm && (
            <View style={styles.reviewForm}>
                <TextInput
                    placeholder="Write your review here..."
                    value={reviewText}
                    style={{ fontSize: 15 }}
                    onChangeText={(text) => setReviewText(text)}
                    multiline
                />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>Select Rating:&nbsp;</Text>
                    <Picker
                        selectedValue={rating}
                        onValueChange={(itemValue, itemIndex) => setRating(itemValue)}
                        style={{ height: 50, width: 150 }}
                    >
                        {[1, 2, 3, 4, 5].map((value) => (
                            <Picker.Item key={value} label={value.toString()} value={value} />
                        ))}
                    </Picker>
                </View>
                <TouchableOpacity style={styles.postButton} onPress={handlePostReview} disabled={isAdding}>
                    <Text style={styles.postText}>{isAdding ? 'Posting...' : 'Post Review'}</Text>
                </TouchableOpacity>
            </View>
            )}
            {postErr !== '' && <Text style={styles.errorText}>{postErr}</Text>}
            {isPost && <Text style={styles.postedText}>Review Posted - see in the list below</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    postReview: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#D6DBFE',
        backgroundColor: 'white',
        borderWidth: 2, 
        borderRadius: 5, 
        width: 350,
        padding: 10,
    },
    postReviewText: {
        color: '#1937E0',
        fontSize: 15
    },
    reviewForm: {
        marginTop: 10,
        padding: 10,
        width: 350,
        borderColor: '#D6DBFE',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
    },
    postButton: {
        backgroundColor: '#1937E0',
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    postText: {
        color: 'white',
      },
    errorText: {
      color: 'red',
      marginTop: 10,
    },
    postedText: {
      color: 'green',
      marginTop: 10,
    },
  });