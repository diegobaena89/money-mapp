import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAypjoI-ZK_VP9zOo7HGwddwfy1FT5i1qM",
  authDomain: "moneymap-b41ba.firebaseapp.com",
  projectId: "moneymap-b41ba",
  storageBucket: "moneymap-b41ba.appspot.com",
  messagingSenderId: "978503794016",
  appId: "1:978503794016:web:b8b9dbef96ae390f71b205",
  measurementId: "G-5Q2W5WNC3P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
