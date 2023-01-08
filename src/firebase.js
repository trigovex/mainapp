/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { getDatabase } from "firebase/database";
 
const firebaseConfig = {
  apiKey: "AIzaSyDNTUYSRLGCxJx1pY31J6IoKOzzCq--aP4",
  authDomain: "myhomedel-e9588.firebaseapp.com",
  projectId: "myhomedel-e9588",
  storageBucket: "myhomedel-e9588.appspot.com",
  messagingSenderId: "374547844662",
  appId: "1:374547844662:web:4dd9a9b62998a618ad9297",
  measurementId: "G-KGTQTNHGL1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

export const provider = new GoogleAuthProvider();

 
export const database = getDatabase(app);