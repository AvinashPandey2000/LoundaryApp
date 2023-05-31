// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB7fbeN9tcNqqv8BfdFXPlu4W87eqiPSsM",
  authDomain: "loundary-a8963.firebaseapp.com",
  projectId: "loundary-a8963",
  storageBucket: "loundary-a8963.appspot.com",
  messagingSenderId: "26480763979",
  appId: "1:26480763979:web:c1721b8d7f0a8ec52ed9ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const db =getFirestore();


export {auth,db};
