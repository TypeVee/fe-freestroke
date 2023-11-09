import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { useState } from 'react';
import * as ImagePicker from "expo-image-picker";
import { initializeApp, uploadImage} from "../../localDatabase/firebase";

export default function PostLocation () {

    const [locationName, setLocationName] = useState('');
    const [area, setArea] = useState('')
    const [locationDescription, setLocationDescription] = useState('')
    
    
    
    async function requestClientPerms() {
      if (Platform.OS !== "web") {
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to upload swimspots");
        }
      }
    }
    requestClientPerms()

    const handleLocationNameChange = (input) => {
        setLocationName(input);
      }

    const handleAreaChange = (input) => {
        setArea(input)
      }
    
      
    const handleLocationDescriptionChange = (input) => {
        setLocationDescription(input)
      }

    const submitLocation = () => {
        console.log('Location Name:', locationName)
        console.log('Area:', area)
        console.log('Location Description:', locationDescription)   
    }
    
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Enter Location details:</Text>
        <TextInput
        style={styles.TextInput}
        placeholder="Location Name"
        value={locationName}
        onChangeText={handleLocationNameChange}
      />   
      <TextInput
        style={styles.TextInput}
        placeholder="Area"
        value={area}
        onChangeText={handleAreaChange}
      />   
       <TextInput
        style={[styles.TextInput, { height: 100 }]}
        placeholder="Location Description"
        value={locationDescription}
        onChangeText={handleLocationDescriptionChange}
        multiline={true}
        numberOfLines={4}
        textAlignVertical="top"
      />
      <Button title="Upload Images" onPress={uploadImage}/>
      <Button title="Submit" onPress={submitLocation} />
    </View>
    )
}

const styles = {
  TextInput: {
    width: '70%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
}