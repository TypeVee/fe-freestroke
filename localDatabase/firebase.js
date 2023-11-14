import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore } from 'firebase/firestore'
import 'react-native-get-random-values';
import { firebaseConfig } from './fbconfig';


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

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