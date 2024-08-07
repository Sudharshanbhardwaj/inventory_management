// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBCrKywSA0MKlvf7mDAmcb9kRBmQzEW60",
  authDomain: "inventory-management-abca6.firebaseapp.com",
  projectId: "inventory-management-abca6",
  storageBucket: "inventory-management-abca6.appspot.com",
  messagingSenderId: "946314682017",
  appId: "1:946314682017:web:9febb730c9c389f53d9ae0",
  measurementId: "G-BVTQR9FBC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore= getFirestore(app);

export {firestore}