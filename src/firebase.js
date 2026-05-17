// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCZ0E-SpZJ2vMgwZXtrMMIUJUHBL9fM1sk",
//   authDomain: "valentinos-projects.firebaseapp.com",
//   projectId: "valentinos-projects",
//   storageBucket: "valentinos-projects.firebasestorage.app",
//   messagingSenderId: "277812146896",
//   appId: "1:277812146896:web:50b90f110d8387176ea4d5",
// };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// export const db = getFirestore(app);
// export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
