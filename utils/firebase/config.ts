import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/database";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBXJE359oL2CU0x38he3TyAR1XRRSdxhOk",
  authDomain: "task-122a4.firebaseapp.com",
  databaseURL: "https://task-122a4-default-rtdb.firebaseio.com/",
  projectId: "task-122a4",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
