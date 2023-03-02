import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC40vLSQ35ziLUeasp8NRZY7huCB5zGImk",
  authDomain: "blind75tracker.firebaseapp.com",
  projectId: "blind75tracker",
  storageBucket: "blind75tracker.appspot.com",
  messagingSenderId: "309169216816",
  appId: "1:309169216816:web:493dde97d07ab5918dfcf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);