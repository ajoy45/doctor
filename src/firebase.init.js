// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBMzqsiPw1PwK60iyIhKt6p9onVzZdR7c",
  authDomain: "doctor-50ab6.firebaseapp.com",
  projectId: "doctor-50ab6",
  storageBucket: "doctor-50ab6.appspot.com",
  messagingSenderId: "523555726911",
  appId: "1:523555726911:web:6712458f06fb0a4c833a8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;