import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export const StarRating = ({ rating }) => {
    const filledImage = require('../../assets/Filled.png');
    const halfFilledImage = require('../../assets/HalfFilled.png');
    const unfilledImage = require('../../assets/Unfilled.png');
    
    if (!rating) {
        return (
            <View style={styles.starContainer}>
                {[...Array(5)].map((_, index) => (
                    <Image key={index} source={unfilledImage} style={styles.star} />
                ))}
            </View>
        );
    } else {
        const filledStars = Math.floor(rating);
        const remainingStars = 5 - filledStars;
        const hasHalfStar = rating % 1 >= 0.5;

        return (
            <View style={styles.starContainer}>
                {[...Array(filledStars)].map((_, index) => (
                <Image key={index} source={filledImage} style={styles.star} />
                ))}
                {hasHalfStar && <Image source={halfFilledImage} style={styles.star} />}
                {[...Array(remainingStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
                <Image key={`emptyStar-${index}`} source={unfilledImage} style={styles.star} />
                ))}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    starContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
    star: {
        width: 20,
        height: 20,
        marginRight: 4,
    },
});