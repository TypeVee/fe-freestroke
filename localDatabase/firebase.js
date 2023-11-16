import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore } from 'firebase/firestore'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { firebaseConfig } from './fbconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';  


const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app)


async function handleImagePicked(ImageUri) {
        const uploadUrl = await uploadImageAsync(ImageUri);
        return uploadUrl
  }

async function uploadImageAsync(uri) {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Upload failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
    const fileRef = ref(getStorage(), uuidv4());
    const result = await uploadBytes(fileRef, blob);
    blob.close();
  
    return await getDownloadURL(fileRef);
  }

const uploadImage = async function (ImageUri){
      return new Promise((resolve, reject)=> handleImagePicked(ImageUri)
      .then((url)=>{
        console.log(url, '<<<url')
        resolve(url)}))
      .catch((error) => {
        console.log('Error handling image:', error);
        reject(error);
      });
    }

module.exports = { initializeApp, uploadImage, auth, db}