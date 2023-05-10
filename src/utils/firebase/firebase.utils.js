import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCXYRFZ8nRR1E7bu7DQ415TBXNkU9J7DfM",
  authDomain: "crwn-clothing-v1-5ac65.firebaseapp.com",
  projectId: "crwn-clothing-v1-5ac65",
  storageBucket: "crwn-clothing-v1-5ac65.appspot.com",
  messagingSenderId: "74580883950",
  appId: "1:74580883950:web:cfd3930b9dc38fa31ef6ff",
  measurementId: "G-HRJX10P3RD",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// create object of provider setup auth for google
const googleProvider = new GoogleAuthProvider();
// using set up option for more step athu
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

//create database equal getFirebase()
export const db = getFirestore();
//create document is name: user into db in it will be container information userAuth.id was got
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
  // if ussrSnapShot isn't container collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    //create date user id
    const createAt = new Date();
    try {
      // setup document
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  // if check user data exits is True
  return userDocRef;
};
// create user equal email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  // create account equal email and password
  return await createUserWithEmailAndPassword(auth, email, password);
};
