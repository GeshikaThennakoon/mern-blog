// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-844ce.firebaseapp.com",
  projectId: "mern-blog-844ce",
  storageBucket: "mern-blog-844ce.appspot.com",
  messagingSenderId: "471070486709",
  appId: "1:471070486709:web:367e3a990fbadf42a98efc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);