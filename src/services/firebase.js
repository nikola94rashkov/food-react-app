import { initializeApp } from "firebase/app";
import {
  getAuth, 
  createUserWithEmailAndPassword, 
  signOut, 
  signInWithEmailAndPassword
} from 'firebase/auth';

import { getFirestore, collection, addDoc, doc, getDoc } from 'firebase/firestore';

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgTWvnEJS0YsN41GZr5jmANKHnzUO0eDU",
  authDomain: "react-recipies-app.firebaseapp.com",
  projectId: "react-recipies-app",
  storageBucket: "react-recipies-app.appspot.com",
  messagingSenderId: "224584743874",
  appId: "1:224584743874:web:b209f3c7899cb46546345b"
};

const app = initializeApp(firebaseConfig);


// firebase/auth functions

export const auth = getAuth();

export const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

// firestore functions

export const db = getFirestore(app);

export const docRef = async (collectionData) => await addDoc(collection(db, 'articles'), collectionData);

export const getDocumentById = async (id) => {
  const docRefData = doc(db, "articles", id);
  const docSnap = await getDoc(docRefData);  

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}


// storage functions

export const storage = getStorage(app);