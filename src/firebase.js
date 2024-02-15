// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqZnakG4zIkso__vjcvD4W6q4w69G7cwE",
  authDomain: "todo-app-a344c.firebaseapp.com",
  projectId: "todo-app-a344c",
  storageBucket: "todo-app-a344c.appspot.com",
  messagingSenderId: "568094485434",
  appId: "1:568094485434:web:6ba11ca0868072ec258b83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);