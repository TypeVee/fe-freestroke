import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment'; 
import { deleteReview } from '../../api';
import ReviewVoter from './ReviewVoter';
import { StarRating } from '../Locations/StarRating';

export default function ReviewCard ({ review_id, body, username, rating_for_location, votes_for_review, created_at, setReviews, reviewCount, setReviewCount, averageRating, setAverageRating }) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteErr, setDeleteErr] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const user = 'milbot1992'
    
    let timeAgo = '';
    if (Date.parse(created_at)) {
        timeAgo = moment(created_at).fromNow()
    }

    const handleDelete = () => {
        setIsDeleting(true);
        deleteReview(review_id)
        .then(() => {
            setIsDeleted(true);
            setIsDeleting(false);
            setDeleteErr('');
            const average_rating = (((averageRating * (reviewCount)) - rating_for_location) / (reviewCount-1)).toFixed(1);
            const rounded_average_rating = parseFloat(average_rating);
            setAverageRating(rounded_average_rating)

            setTimeout(() => {
                setReviewCount((currentCount) => Number(currentCount) - 1);
                setReviews((reviews) => reviews.filter((review) => review.review_id !== review_id));
            }, 2000);
        })
        .catch((error) => {
            setIsDeleting(false);
            setDeleteErr('Error deleting review');
            console.log(error);
        });
    };

    return (
        <View style={styles.reviewCard}>
            <View style={styles.reviewCardHeader}>
                <Text>{username}</Text>
                <Text>⏲️ {timeAgo}</Text>
            </View>
            <View style={styles.starrating}>
                <StarRating
                rating={rating_for_location !== null ? rating_for_location : 0}
                />
            </View>
            <Text style={styles.reviewBody}>{body}</Text>
                <View style={styles.votesanddelete}>
                    <ReviewVoter votes_for_review={votes_for_review} review_id={review_id}/>
                    {user === username && (
                        <TouchableOpacity style={styles.deleteReviewButton} onPress={handleDelete} disabled={isDeleting || isDeleted}>
                            <Text style={styles.buttonText}>{isDeleting ? 'Deleting...' : 'Delete Review'}</Text>
                        </TouchableOpacity>
                    )}
                    {deleteErr !== '' && <Text style={styles.errorText}>{deleteErr}</Text>}
                    {isDeleted && (
                        <Text style={styles.deleteText}>Review Deleted - review will disappear from list in a few seconds</Text>
                    )}
                </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    reviewCard: {
        padding: 10,
        backgroundColor: '#fff',
        borderColor: '#D6DBFE',
        borderWidth: 1,
        borderRadius: 8,
        width: 350,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        transition: 'transform 0.2s ease-in-out',
        marginBottom: 10
    },
    deleteText: {
        color: '#007BFF',
    },
    reviewCardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderColor: '#D6DBFE',
        borderWidth: 1,
        color: '#1937E0', 
        padding: 10,
        borderRadius: 8,
        marginBottom: 10
    },
    starrating: {
        marginLeft: 6,
        marginBottom: 5
    },
    reviewBody: {
        fontSize: 15,
        padding: 6,
        textAlign: 'left',
    },
    reviewVotes: {
        fontSize: 0.9,
        color: '#555',
        paddingLeft: 10,
        textAlign: 'left',
    },
    votesanddelete: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#1937E0', 
        padding: 10,
        borderRadius: 8,
    },
    deleteReviewButton: {
        backgroundColor: '#D6DBFE',
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
        width: 120,
        borderRadius: 8,
        marginLeft: 130
    },
    buttonText: {
        color: '#1937E0',
    },
    errorText: {
        color: 'red',
    },
    postText: {
        color: '#007BFF',
    },
});
