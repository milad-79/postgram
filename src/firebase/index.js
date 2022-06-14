import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB-KJB4bPfegOIjMDLRmzmbD2zI_dRt8yw",
  authDomain: "insta-48f26.firebaseapp.com",
  projectId: "insta-48f26",
  storageBucket: "insta-48f26.appspot.com",
  messagingSenderId: "333349232233",
  appId: "1:333349232233:web:d3234a39ba1bb2bb198cf8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()