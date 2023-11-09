import { StyleSheet, Text, View, FlatList } from 'react-native';
import SingleLocationContainer from './SingleLocationContainer';
import ReviewContainer from '../Reviews/index';
import React, { useEffect, useState } from 'react';
import { getLocationByID } from '../../api';

export default function SingleLocation() {
    const location_id = 3;
    const [location, setLocation] = useState({});

    useEffect(() => {
        getLocationByID(location_id).then((location) => {
        setLocation(location[0]);
        });
    }, [location_id]);

    return (
        <FlatList
        style={{ flex: 1, marginTop: 50 }}
        ListHeaderComponent={() => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <SingleLocationContainer style={styles.single_location} location={location} />
            <ReviewContainer />
            </View>
        )}
        />
    );
}

const styles = StyleSheet.create({
    single_location: {
        marginBottom: 50
    }
});