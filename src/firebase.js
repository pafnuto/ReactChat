import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB41nIkb7HSTd_i4_yhdyXDBQWPFLTIrtc",
  authDomain: "reactchat-ffcc4.firebaseapp.com",
  projectId: "reactchat-ffcc4",
  storageBucket: "reactchat-ffcc4.appspot.com",
  messagingSenderId: "120607505812",
  appId: "1:120607505812:web:e29a472678cded22f82381",
  measurementId: "G-Y5TPB41DGE"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()