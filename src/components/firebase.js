
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCVlAUnGB4rIbSDMwqykRxzpO5xFCxIsM",
  authDomain: "todo-app-b699c.firebaseapp.com",
  projectId: "todo-app-b699c",
  storageBucket: "todo-app-b699c.appspot.com",
  messagingSenderId: "963849009971",
  appId: "1:963849009971:web:f4e99fab4c5d35c5495c46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();