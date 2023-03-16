// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiakzlVP83YSThyWqVuBgFxXbDq_FQZkg",
  authDomain: "projet-portfolio-65857.firebaseapp.com",
  projectId: "projet-portfolio-65857",
  storageBucket: "projet-portfolio-65857.appspot.com",
  messagingSenderId: "187239172716",
  appId: "1:187239172716:web:d1a678fd96cc168301e649"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);