// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtZxLiJsxcjJOD06qUFYuTMCDPV2VWKQY",
  authDomain: "clone-yt-62f7c.firebaseapp.com",
  projectId: "clone-yt-62f7c",
  storageBucket: "clone-yt-62f7c.firebasestorage.app",
  messagingSenderId: "1032461269211",
  appId: "1:1032461269211:web:6c22cb2ddc8bbd4b15b4fe",
  measurementId: "G-LH392RYR0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();