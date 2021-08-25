import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD3fLZwYNY1AHqTMtSqsdIRC2oEK8F37dQ",
    authDomain: "ecommerce-vinos.firebaseapp.com",
    projectId: "ecommerce-vinos",
    storageBucket: "ecommerce-vinos.appspot.com",
    messagingSenderId: "687116233993",
    appId: "1:687116233993:web:a007053419b424865d77d8"
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);