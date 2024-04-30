import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "learn-firebase-38f0c.firebaseapp.com",
  projectId: "learn-firebase-38f0c",
  storageBucket: "learn-firebase-38f0c.appspot.com",
  messagingSenderId: "958239121330",
  appId: "YOUR_APP_ID",
  measurementId: "G-YL7R8P35SB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db, collection, addDoc }
