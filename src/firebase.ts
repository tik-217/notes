// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARiortj89Bk-XjazTXo2SIRwWsi7DC2Yk",
  authDomain: "notes-bda8b.firebaseapp.com",
  databaseURL:
    "https://notes-bda8b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "notes-bda8b",
  storageBucket: "notes-bda8b.appspot.com",
  messagingSenderId: "529071450690",
  appId: "1:529071450690:web:3a36c5a5d0aac4488d5bdb",
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const database = getDatabase(appFirebase);
