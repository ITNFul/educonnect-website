// Import Firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO7FATvqtW84_MB63rwGRXWluQLNIF5IU",
  authDomain: "itnful-e92ed.firebaseapp.com",
  projectId: "itnful-e92ed",
  storageBucket: "itnful-e92ed.appspot.com",
  messagingSenderId: "626630116019",
  appId: "1:626630116019:web:12b02d78a4f0b4b6bea6c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export auth for use in other scripts
export { auth };
