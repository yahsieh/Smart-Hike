import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAIw1295zWvO3CquZf_JbkTTX8GaAwulhE",
  authDomain: "smarthiking-167c3.firebaseapp.com",
  projectId: "smarthiking-167c3",
  storageBucket: "smarthiking-167c3.appspot.com",
  messagingSenderId: "153620858708",
  appId: "1:153620858708:web:756b9cf11f1670ffceaac1",
  measurementId: "G-82G6VZHJ7B"
};

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
//   };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;