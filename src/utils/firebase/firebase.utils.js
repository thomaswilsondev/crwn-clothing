// Import Firebase modules
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Configure Firebase instance with API keys and other settings
const firebaseConfig = {
  apiKey: "AIzaSyCXYRFZ8nRR1E7bu7DQ415TBXNkU9J7DfM",
  authDomain: "crwn-clothing-v1-5ac65.firebaseapp.com",
  projectId: "crwn-clothing-v1-5ac65",
  storageBucket: "crwn-clothing-v1-5ac65.appspot.com",
  messagingSenderId: "74580883950",
  appId: "1:74580883950:web:cfd3930b9dc38fa31ef6ff",
  measurementId: "G-HRJX10P3RD",
};
const firebaseApp = initializeApp(firebaseConfig);

// Create a GoogleAuthProvider instance and set custom parameters
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Export Firebase authentication and database instances
export const auth = getAuth();
export const db = getFirestore();

// Export function for signing in with Google using a popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Export function for signing in with Google using a redirect
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Export function for adding a collection of documents to the database
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

// Export function for getting all documents in a "categories" collection from the database
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

// Export function for creating a user document in the "users" collection when a new user signs up
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

// Export function for creating a new user with an email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// Export function for signing in an existing user with an email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// Export function for signing out the current user
export const signOutUser = async () => await signOut(auth);

// Export function that listens for changes to the authentication state and invokes a callback with the user object when the state changes
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
