import { initializeApp } from 'firebase/app';
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import 'react-native-get-random-values';
const uuid = require('uuid')
import {firebaseConfig} from './firebaseConfig'

  initializeApp(firebaseConfig)

async function handleImagePicked(pickerResult) {
    try {
      if (!pickerResult.cancelled) {
        const uploadUrl = await uploadImageAsync(pickerResult.assets[0].uri);
        return uploadUrl
      }
    } catch (e) {
      alert("Upload failed, sorry :(");
      console.log(e)
    }
  };

async function uploadImageAsync(uri) {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
    const fileRef = ref(getStorage(), uuid.v4());
    const result = await uploadBytes(fileRef, blob);
    blob.close();
  
    return await getDownloadURL(fileRef);
  }

const uploadImage = async function (){
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
      });
      handleImagePicked(pickerResult).then((url)=>{return url});
    }

  module.exports = { initializeApp, uploadImage}