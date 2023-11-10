// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoG1jR3F2sidcncnCYf8nF5nuAMsxTZRU",
  authDomain: "freestroke-c484f.firebaseapp.com",
  projectId: "freestroke-c484f",
  storageBucket: "freestroke-c484f.appspot.com",
  messagingSenderId: "325562818287",
  appId: "1:325562818287:web:26ddde2cee553d97f9451a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });