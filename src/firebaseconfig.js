// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
export const db = getFirestore(app);