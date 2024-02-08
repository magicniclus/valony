import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "duval-62f7a.firebaseapp.com",
  databaseURL: "https://duval-62f7a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "duval-62f7a",
  storageBucket: "duval-62f7a.appspot.com",
  messagingSenderId: "834208835048",
  appId: "1:834208835048:web:62521d5df878c6b637305d"
};

// Vérifier si Firebase a déjà été initialisé
let app: FirebaseApp; // Typage explicite de `app`
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
