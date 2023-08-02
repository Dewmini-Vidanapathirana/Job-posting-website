
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCor3MZzVfP6Nz0cT-CT-s58xDAFMgiGLw",
  authDomain: "job-website-954f0.firebaseapp.com",
  projectId: "job-website-954f0",
  storageBucket: "job-website-954f0.appspot.com",
  messagingSenderId: "2267928111",
  appId: "1:2267928111:web:1876d78bcc098b931598da"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);