// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxpNzAxE15K_M2HFLXXnY8lHoAOGaTCNE",
  authDomain: "pandatronic-b1374.firebaseapp.com",
  databaseURL: "https://pandatronic-b1374-default-rtdb.firebaseio.com",
  projectId: "pandatronic-b1374",
  storageBucket: "pandatronic-b1374.appspot.com",
  messagingSenderId: "213796555233",
  appId: "1:213796555233:web:516f1eb16ba7902babaaa0",
  measurementId: "G-SCJKQX395X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
