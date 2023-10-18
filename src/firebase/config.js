// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAjRsqzZdm2DtP9wEEVPQrii107bGB-E1s",
  authDomain: "carta-tuttotano.firebaseapp.com",
  projectId: "carta-tuttotano",
  storageBucket: "carta-tuttotano.appspot.com",
  messagingSenderId: "528477767242",
  appId: "1:528477767242:web:31e67c517be088f6c888b3",
  measurementId: "G-18F7QET00G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const db = getFirestore(app);