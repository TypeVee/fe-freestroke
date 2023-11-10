import { StyleSheet, Text, View, TextInput, Button, Image, TouchableHighlight} from 'react-native';
import { useState } from 'react';
import * as ImagePicker from "expo-image-picker";
import { initializeApp, uploadImage} from "../../localDatabase/firebase";

export default function PostLocation ({draggableLocation}) {

    const [locationName, setLocationName] = useState('');
    const [area, setArea] = useState('')
    const [locationDescription, setLocationDescription] = useState('')
    const [imageURI, setImageURI] = useState()
    
    const selectImage = async function (){
       const tempImage = await ImagePicker.launchImageLibraryAsync({
        quality: 1,
      })
      
      setImageURI(tempImage.assets[0].uri)
    }

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

    const submitLocation = function (){
        if(!imageURI || !locationName || !area || !locationDescription){
          alert('Please fill in all information')
          return
        }
        uploadImage(imageURI).then((url)=>{
        console.log('Location Name:', locationName)
        console.log('Area:', area)
        console.log('Location Description:', locationDescription),
        console.log('Image src: ', url)})
    }
    console.log(draggableLocation,"IN POST LOCATION")
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
      {}
        <TouchableHighlight onPress={()=>setImageURI()}>
          <Image source={{uri: (imageURI !== undefined ? imageURI : undefined)}} style={{width:100, height:100}}/>
        </TouchableHighlight>
      <Button title="Upload Image" onPress={selectImage}/>
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