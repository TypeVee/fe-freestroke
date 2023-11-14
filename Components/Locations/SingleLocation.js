import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import SingleLocationContainer from './SingleLocationContainer';
import ReviewContainer from '../Reviews/index';
import React, { useEffect, useState } from 'react';
import { getLocationByID } from '../../api';
import {findID} from '../../localDatabase/database.js'

export default function SingleLocation({route}) {

    const location_id = route.params;  
    const [location, setLocation] = useState({});
    const [reviewCount, setReviewCount] = useState(0)
    const [averageRating, setAverageRating] = useState(0)
    const [singleLoading, setSingleLoading] = useState(true)
    const [renderDelayed, setRenderDelayed] = useState(false);
    const [saved, setSaved] = useState(false)
    useEffect(() => {
        if (!singleLoading) {
            setTimeout(() => {
                setRenderDelayed(true);
            }, 1000);
        }
    }, [singleLoading]);

    useEffect(() => {
        getLocationByID(location_id).then((location) => {
        setLocation(location);
        setReviewCount(location.total_count)
        setAverageRating(location.avg_rating)
        setSingleLoading(false)
        findID(location_id).then((res)=>{
            if(JSON.parse(res).length === 1){
                setSaved(true)
            }
        })
        });
    }, [location_id]);

    return (
        <FlatList
            style={{ flex: 1, marginTop: 50 }}
            ListHeaderComponent={() => (
                <>
                {!renderDelayed && (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2' }}>
                    <ActivityIndicator size="large" color="#1937E0" />
                    </View>
                )}
                {renderDelayed && (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <SingleLocationContainer style={styles.single_location} location={location} reviewCount={reviewCount} averageRating={averageRating} saved={saved}/>
                    <ReviewContainer location_id={location_id} reviewCount={reviewCount} setReviewCount={setReviewCount} averageRating={averageRating} setAverageRating={setAverageRating} />
                    </View>
                )}
                </>
            )}
        />
    );
}

const styles = StyleSheet.create({
    single_location: {
        marginBottom: 50
    }
});