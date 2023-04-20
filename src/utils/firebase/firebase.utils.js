import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyD5xAQtlYXTVHflolXTgUnEplqA4STsINo",
    authDomain: "storiana-cfa43.firebaseapp.com",
    projectId: "storiana-cfa43",
    storageBucket: "storiana-cfa43.appspot.com",
    messagingSenderId: "533328091243",
    appId: "1:533328091243:web:79387a470c955d0937f92e",
    measurementId: "G-G4XQK8BSSC"
  };
  
  // Initialize Firebase
  const fireBaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account",
  })

  export const auth = getAuth();
  export const signInPopup = () => signInWithPopup(auth, provider);