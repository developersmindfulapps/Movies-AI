// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import {auth} from './firebase'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-fu0PNYRbU0CmOEo-AtoS9527Va-BRCE",
  authDomain: "netflix-ai-591fa.firebaseapp.com",
  projectId: "netflix-ai-591fa",
  storageBucket: "netflix-ai-591fa.firebasestorage.app",
  messagingSenderId: "695834838273",
  appId: "1:695834838273:web:1bd8957c62752797728700"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();