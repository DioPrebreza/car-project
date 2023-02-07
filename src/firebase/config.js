import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG4-Vk01jMFk09LHHoqz3xC2BZbXK56cI",
  authDomain: "mekaniku-55a7d.firebaseapp.com",
  databaseURL:
    "https://mekaniku-55a7d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mekaniku-55a7d",
  storageBucket: "mekaniku-55a7d.appspot.com",
  messagingSenderId: "443521690395",
  appId: "1:443521690395:web:34fa817684de22eaefc1be",
  measurementId: "G-RT615NN2QX",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
// const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
