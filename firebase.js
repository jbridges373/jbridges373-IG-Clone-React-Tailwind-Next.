// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo8mio7Q6Caj-LTOPdGEQ350EgppA2WZ4",
  authDomain: "ig-clone-fe06f.firebaseapp.com",
  projectId: "ig-clone-fe06f",
  storageBucket: "ig-clone-fe06f.appspot.com",
  messagingSenderId: "562391933924",
  appId: "1:562391933924:web:aa0a82d946961db2de1df1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };