// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0Ef5eMfwDCOpdptVm313yIZ6q6YnfTAo",
  authDomain: "foodiehub-e31ba.firebaseapp.com",
  projectId: "foodiehub-e31ba",
  storageBucket: "foodiehub-e31ba.firebasestorage.app",
  messagingSenderId: "375554678397",
  appId: "1:375554678397:web:3e254bc64aa9ba34229b14",
  measurementId: "G-CLF52LZSDW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()