import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCtgQ0V75Re3hvw-UTAnw7wMdoct-Ua3-s",
  authDomain: "smart-campus-queue-b1eb4.firebaseapp.com",
  projectId: "smart-campus-queue-b1eb4",
  storageBucket: "smart-campus-queue-b1eb4.appspot.com",
  messagingSenderId: "189748613615",
  appId: "1:189748613615:web:dae91c646db7385cfe261a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
