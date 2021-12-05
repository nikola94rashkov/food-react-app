import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBgTWvnEJS0YsN41GZr5jmANKHnzUO0eDU",
  authDomain: "react-recipies-app.firebaseapp.com",
  projectId: "react-recipies-app",
  storageBucket: "react-recipies-app.appspot.com",
  messagingSenderId: "224584743874",
  appId: "1:224584743874:web:b209f3c7899cb46546345b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);