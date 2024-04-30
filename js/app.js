import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyA_C5eDXg-r1Wv3HFtC8aMOiSNfTMn2bjM",
  authDomain: "learn-firebase-38f0c.firebaseapp.com",
  projectId: "learn-firebase-38f0c",
  storageBucket: "learn-firebase-38f0c.appspot.com",
  messagingSenderId: "958239121330",
  appId: "1:958239121330:web:a3332322c4ebaba8d94eab",
  measurementId: "G-YL7R8P35SB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db, collection, addDoc }