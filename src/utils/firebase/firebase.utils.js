import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc
} from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBD58lT1mYnZoMNwlUJb4NJFMsOJtww2bk',
  authDomain: 'king-store-db-52f8f.firebaseapp.com',
  projectId: 'king-store-db-52f8f',
  storageBucket: 'king-store-db-52f8f.appspot.com',
  messagingSenderId: '1058536916272',
  appId: '1:1058536916272:web:4aa568b29062d5dea0b4f5'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Create an Instace for Google
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();

export const signInWithPopupGoogle = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async userAuth => {
  //pointing at user document reference using user identifier
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (e) {
      console.log('error creating the user', e.message);
    }
  }
  return userDocRef;
};
