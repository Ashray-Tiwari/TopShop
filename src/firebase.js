import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJbayM3IGLh5vpRZHKqTrfBiyrF07-p5I",
    authDomain: "ecommerce-3b845.firebaseapp.com",
    projectId: "ecommerce-3b845",
    storageBucket: "ecommerce-3b845.appspot.com",
    messagingSenderId: "144002064391",
    appId: "1:144002064391:web:3f1423b8660a509d3a4aa2",
    measurementId: "G-TVV7YSCZDH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db,auth };