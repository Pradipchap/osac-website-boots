// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB90OZpBmG8DjeARvWn9zQ3Zh6zuVU58N8",
  authDomain: "osac-dev.firebaseapp.com",
  databaseURL: "https://osac-dev-default-rtdb.firebaseio.com",
  projectId: "osac-dev",
  storageBucket: "osac-dev.appspot.com",
  messagingSenderId: "1052183007004",
  appId: "1:1052183007004:web:2b07daea440ccf3467b4d9",

  measurementId: "G-E463VHX4PT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

