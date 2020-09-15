import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAvCcYemHRiwi_7gz0C5plHbiU6BZozL0g",
  authDomain: "clone-bb3a3.firebaseapp.com",
  databaseURL: "https://clone-bb3a3.firebaseio.com",
  projectId: "clone-bb3a3",
  storageBucket: "clone-bb3a3.appspot.com",
  messagingSenderId: "302664935542",
  appId: "1:302664935542:web:899b17a1a587cadf8f5757",
  measurementId: "G-G2WQHXE8Y3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); 
const auth = firebase.auth();

export { db, auth };