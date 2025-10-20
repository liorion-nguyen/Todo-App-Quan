import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJ5MXsuT4KiyyrBfEklaAZ0HW8tiwL_L8",
  authDomain: "todo-app-8b54d.firebaseapp.com",
  projectId: "todo-app-8b54d",
  storageBucket: "todo-app-8b54d.firebasestorage.app",
  messagingSenderId: "499201797235",
  appId: "1:499201797235:web:57b66b1c99f692d5d94e06"
};

const app = initializeApp(firebaseConfig); // Khởi tạo Firebase app
const auth = getAuth(app); // Khởi tạo Firebase Auth
const providerGG = new GoogleAuthProvider(); // Khởi tạo Google Auth Provider
const db = getFirestore(app); // Khởi tạo Firebase Firestore

export { app, auth, db, providerGG };

