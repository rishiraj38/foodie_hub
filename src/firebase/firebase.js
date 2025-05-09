// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9OgUOeuVUbVXsGpVWzGn8b36d0Y9gxOw",
  authDomain: "foodie-hub-1998d.firebaseapp.com",
  projectId: "foodie-hub-1998d",
  storageBucket: "foodie-hub-1998d.firebasestorage.app",
  messagingSenderId: "597823613590",
  appId: "1:597823613590:web:fd2e4bab1eeb2f66ce70b7",
  measurementId: "G-FHQJEE6N7F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth, analytics };