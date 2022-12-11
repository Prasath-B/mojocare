// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApPQHny_MZFIPwGVOpyO7bPHFNdiRudAo",
  authDomain: "mojocare-663a7.firebaseapp.com",
  projectId: "mojocare-663a7",
  storageBucket: "mojocare-663a7.appspot.com",
  messagingSenderId: "122441954121",
  appId: "1:122441954121:web:cbadb2250639133e86a098",
  measurementId: "G-GTCYCG6ZNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)
export {db,storage}