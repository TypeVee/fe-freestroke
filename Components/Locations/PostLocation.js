import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { useState } from 'react';
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes, getDownloadURL, getReference } from "firebase/storage";
import {firebaseConfig, initializeApp} from "../../localDatabase/firebase";
import uuid from "uuid";

export default function PostLocation () {

    const [locationName, setLocationName] = useState('');
    const [area, setArea] = useState('')
    const [locationDescription, setLocationDescription] = useState('')
    const [image, setImage] = useState('')
    const [uploading, setUploading] = useState(false)
    
    initializeApp(firebaseConfig)
    async function componentDidMount() {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    }
    componentDidMount()
    const storageRef = getStorage()
    // console.log("storage: ", storageRef)
    const handleLocationNameChange = (input) => {
        setLocationName(input);
      }

    const handleAreaChange = (input) => {
        setArea(input)
      }
    
    handleImagePicked = async (pickerResult) => {
        console.log("URI: ", pickerResult.assets.uri)
        try {
          setUploading({ uploading: true });
    
          if (!pickerResult.cancelled) {
            console.log(pickerResult)
            console.log("uri: ",pickerResult.uri)
            const uploadUrl = await uploadImageAsync(pickerResult.uri);
            setImage({ image: uploadUrl });

          }
        } catch (e) {
          alert("Upload failed, sorry :(");
          console.log(e)
        } finally {
          setUploading({ uploading: false });
        }
      };

          async function uploadImageAsync(uri) {
            const blob = await new Promise((resolve, reject) => {
              console.log("Someone please get me a url")
              const xhr = new XMLHttpRequest();
              console.log(xhr)
              console.log("uri: ",uri)
              xhr.onload = function () {
                console.log("xhr happy :)")
                resolve(xhr.response);
              };
              xhr.onerror = function (e) {
                console.log("xhr:", e);
                reject(new TypeError("Network request failed"));
              };
              xhr.responseType = "blob";
              xhr.open("GET", uri, true);
              xhr.send(null);
              console.log("Abandon hope all ye who get this far, for you may find you've succeeded")
            });
              const fileRef = ref(getStorage(), uuid.v4());
              // console.log(fileRef)
              const result = await uploadBytes(fileRef, blob);
              blob.close();
            
              return await getDownloadURL(fileRef);
            }

    const uploadImage = async function (){
          let pickerResult = await ImagePicker.launchImageLibraryAsync({
          });
          this.handleImagePicked(pickerResult);
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