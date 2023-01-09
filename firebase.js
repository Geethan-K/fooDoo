import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCr5IZ93EBgL7mUohkP5TC223eJ8v5Rwxg",
  authDomain: "food-delivery-app-ab784.firebaseapp.com",
  projectId: "food-delivery-app-ab784",
  storageBucket: "food-delivery-app-ab784.appspot.com",
  messagingSenderId: "714633886798",
  appId: "1:714633886798:web:6dc059ea6f4d2b87fb171f",
  measurementId: "G-6YV6YT8HBJ"
};

//!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 firebase.initializeApp(firebaseConfig) 

export default firebase;
