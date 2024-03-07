import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAFmK8CsMDw26yMQGQbsMnyyW9f05Pq4pM",
  authDomain: "faceattendance-aa4a0.firebaseapp.com",
  databaseURL: "https://faceattendance-aa4a0-default-rtdb.firebaseio.com",
  projectId: "faceattendance-aa4a0",
  storageBucket: "faceattendance-aa4a0.appspot.com",
  messagingSenderId: "716290335537",
  appId: "1:716290335537:web:ea852fb63e7c9db0710610",
  measurementId: "G-N9NLE6GGCJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()