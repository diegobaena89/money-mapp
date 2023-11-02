import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, push, ref } from "firebase/database";

interface IFirebaseSaveTransaction {
  amount: number;
  category: string;
  date: string;
  description: string;
  transactionType: string;
}

const firebaseConfig = {
  apiKey: "AIzaSyAypjoI-ZK_VP9zOo7HGwddwfy1FT5i1qM",
  authDomain: "moneymap-b41ba.firebaseapp.com",
  projectId: "moneymap-b41ba",
  storageBucket: "moneymap-b41ba.appspot.com",
  messagingSenderId: "978503794016",
  appId: "1:978503794016:web:b8b9dbef96ae390f71b205",
  measurementId: "G-5Q2W5WNC3P",
};

export function writeTransaction(
  userId: string,
  newTransaction: IFirebaseSaveTransaction
) {
  const db = getDatabase();
  push(ref(db, "User/" + userId + "/transactions/"), {
    newTransaction,
  });
}

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const auth = getAuth(app);
