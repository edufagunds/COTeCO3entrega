import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdmTzmYl5wW01d-Jp0Y3P0ylnPx2L2Nr0",
  authDomain: "coteco-56bdd.firebaseapp.com",
  projectId: "coteco-56bdd",
  storageBucket: "coteco-56bdd.appspot.com",
  messagingSenderId: "786386088172",
  appId: "1:786386088172:web:bdde8f9df4af201c3a35c9"
};

// Initialize Firebase
const app         = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db   = getFirestore(app)