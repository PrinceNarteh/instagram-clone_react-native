import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "instagram-clone-3675.firebaseapp.com",
  projectId: "instagram-clone-3675",
  storageBucket: "instagram-clone-3675.appspot.com",
  messagingSenderId: "1026122919943",
  appId: process.env.REACT_APP_appId,
  measurementId: "G-M2HLBTX7X2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);