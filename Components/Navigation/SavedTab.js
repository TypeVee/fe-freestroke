import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {useState} from 'react';
import SavedLocationCard from '../Locations/SavedLocationCard';
import {fetch} from "../../localDatabase/database"

export default function SavedTab({navigation}) {
    const [loading, setLoading] = useState(true)
    const [savedLocations, setSavedLocations] = useState([])
    let SavedCards = <></>
    fetch().then((res)=>{
        setSavedLocations(JSON.parse(res)._array)
        setLoading(false)     
    })
    return (
        <ScrollView >
            <Text>Saved Locations</Text>
                {
                savedLocations.map(location=>
                    <SavedLocationCard style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} navigation={navigation} key={location.location_id} location={location}/>
                    )
                }
            
        </ScrollView>
    )
}