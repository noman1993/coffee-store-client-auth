// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1I8dMzI-cEuWCSHmZo49WcZ1X79MH5O8",
  authDomain: "coffee-store-project-5798c.firebaseapp.com",
  projectId: "coffee-store-project-5798c",
  storageBucket: "coffee-store-project-5798c.firebasestorage.app",
  messagingSenderId: "689180451514",
  appId: "1:689180451514:web:14f804a6382c0457bf5883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth