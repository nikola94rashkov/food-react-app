import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, doc, addDoc, getDoc, updateDoc, deleteDoc, query, where, getDocs, onSnapshot } from 'firebase/firestore';
import { getStorage, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

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
    return false;
  }
}

export const getDocumentByName = async (name, setFunction) => {
  const q = query(collection(db, "articles"), where("title", ">=", name));
  
  onSnapshot(q, (snapshot) => {
    const array = [];

    if(name != '') {
      snapshot.docs.map(doc => array.push({...doc.data(), id: doc.id}))

      setFunction(array)
    } else {
      setFunction([])
    }
  })
}

export const updateDocumentValues = async (options, id) => {
  const updateDocRef = doc(db, "articles", id);

  await updateDoc(updateDocRef, options);
}

export const getCurrentUserArticles = async (userId) => {
   const q = query(collection(db, "articles"), where("userId", "==", userId))

   const querySnapshot = await getDocs(q);

   return querySnapshot;
}

export const getDynamicUserArticles = async (id, callback) => {
  const q = query(collection(db, "articles"), where("userId", "==", id));
  
  onSnapshot(q, (snapshot) => {
    const array = [];

    snapshot.docs.map(doc => array.push({...doc.data(), id: doc.id}))

    callback(array)
  })

}

export const deleteCurrentRecord = async (id) => {
  const deleteDocRef = doc(db, "articles", id);
  
  await deleteDoc(deleteDocRef)
}

// storage functions

export const storage = getStorage(app);

export const uploadImageToStorage = (image, callback) => {
  if(!image) return;

  const storageRef = ref(storage, `/images/${image.name}`);
  const uploadTask = uploadBytesResumable(storageRef, image);

  uploadTask.on('state_change', (snapshot) => {
      console.log(snapshot)
  }, 
  (err) => console.log(err),
  () => {
      getDownloadURL(uploadTask.snapshot.ref)
      .then(url => callback(url))
  }
  );
}