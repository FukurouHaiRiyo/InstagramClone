import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAVZvMkoX8uCXFMR6Opt9XNCJUPtbUKWmk",
    authDomain: "instagram-99da6.firebaseapp.com",
    projectId: "instagram-99da6",
    storageBucket: "instagram-99da6.appspot.com",
    messagingSenderId: "20799898982",
    appId: "1:20799898982:web:5d922990f5f51bd4df34a7"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log('firebase', firebase);

export { firebase, FieldValue };