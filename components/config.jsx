// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-94PmPjeGEazXVqxb55k91gF1QPWdIQU",
  authDomain: "fir-auth-a8d36.firebaseapp.com",
  projectId: "fir-auth-a8d36",
  storageBucket: "fir-auth-a8d36.appspot.com",
  messagingSenderId: "599055858197",
  appId: "1:599055858197:web:d47e08c20cce9c1aa36c1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider(app);