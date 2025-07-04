import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBBjyROp7kiE3SnKGo8lYq0Q6d5IgVXumY",
  authDomain: "resolvebrasil-8d8e4.firebaseapp.com",
  projectId: "resolvebrasil-8d8e4",
  storageBucket: "resolvebrasil-8d8e4.firebasestorage.app",
  messagingSenderId: "126048983999",
  appId: "1:126048983999:web:a281b9a3200da046761f0a",
  measurementId: "G-5P8848VYQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);