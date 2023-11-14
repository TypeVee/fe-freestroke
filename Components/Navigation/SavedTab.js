import { StyleSheet, Text, View } from 'react-native';
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Saved Locations</Text>
                {
                savedLocations.map(location=>
                    <SavedLocationCard navigation={navigation} location={location}/>
                    )
                }
            
        </View>
    )
}