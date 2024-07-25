import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYX6qRbcngQERTfhlZb9Tci4QcBKm58no",
  authDomain: "kazka-28508.firebaseapp.com",
  projectId: "kazka-28508",
  storageBucket: "kazka-28508.appspot.com",
  messagingSenderId: "978073008068",
  appId: "1:978073008068:web:aa83ee37ebc9831a329691",
  measurementId: "G-F94YFPKXQS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
