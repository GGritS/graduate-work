import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnkanuUGgzqIte9QEGRNMKnPRGvS-Y6lE",
  authDomain: "graduate-work-b8ea5.firebaseapp.com",
  projectId: "graduate-work-b8ea5",
  storageBucket: "graduate-work-b8ea5.appspot.com",
  messagingSenderId: "945204797469",
  appId: "1:945204797469:web:8ec74b959c6b569a1b26f4",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();
