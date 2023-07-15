// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB9Qeio2h-Tzyw05E4s1-v4JPiMJZHjW8",
  authDomain: "rn-firebase-auth-ts.firebaseapp.com",
  projectId: "rn-firebase-auth-ts",
  storageBucket: "rn-firebase-auth-ts.appspot.com",
  messagingSenderId: "836811832450",
  appId: "1:836811832450:web:c987c10256a168e1df889b",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
// firebase auth
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
