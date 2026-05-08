import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZ0E-SpZJ2vMgwZXtrMMIUJUHBL9fM1sk",
  authDomain: "valentinos-projects.firebaseapp.com",
  projectId: "valentinos-projects",
  storageBucket: "valentinos-projects.firebasestorage.app",
  messagingSenderId: "277812146896",
  appId: "1:277812146896:web:50b90f110d8387176ea4d5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
