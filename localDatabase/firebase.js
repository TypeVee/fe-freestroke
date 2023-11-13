import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import 'react-native-get-random-values';
const uuid = require('uuid')
import {firebaseConfig} from './fbConfig'

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


//Functions
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
    const fileRef = ref(getStorage(), uuid.v4());
    const result = await uploadBytes(fileRef, blob);
    blob.close();
  
    return await getDownloadURL(fileRef);
  }

const uploadImage = async function (ImageUri){
      return new Promise((resolve, reject)=> handleImagePicked(ImageUri).then((url)=>{
        resolve(url)}))
    }

module.exports = { initializeApp, uploadImage, auth}