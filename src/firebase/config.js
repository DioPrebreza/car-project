import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABPQK3CV3Lrlv3yg62fnlWUmePvxvJju4",
  authDomain: "mekaniku-21054.firebaseapp.com",
  projectId: "mekaniku-21054",
  storageBucket: "mekaniku-21054.appspot.com",
  messagingSenderId: "403881422556",
  appId: "1:403881422556:web:547283ddd0f787efa78e19",
  measurementId: "G-BK8L3L13XZ",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
