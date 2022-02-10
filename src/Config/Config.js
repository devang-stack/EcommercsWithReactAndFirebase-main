import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBR3kZRJhsLmOD6FVXmmkzYwV9VWyYkWOQ",
    authDomain: "ecommerce-762a9.firebaseapp.com",
    projectId: "ecommerce-762a9",
    storageBucket: "ecommerce-762a9.appspot.com",
    messagingSenderId: "14168397566",
    appId: "1:14168397566:web:de511569960985077af7af"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }