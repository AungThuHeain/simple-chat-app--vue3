// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNktu2M4pepobWta86D347GSh0opAYb_E",
  authDomain: "chat-defd7.firebaseapp.com",
  projectId: "chat-defd7",
  storageBucket: "chat-defd7.appspot.com",
  messagingSenderId: "694754171462",
  appId: "1:694754171462:web:b9a3cf5fed5ed3ddb98847",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
//auth
const auth = getAuth(app);

export { db, Timestamp, auth, createUserWithEmailAndPassword };
