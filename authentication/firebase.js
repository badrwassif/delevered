import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIwOxG_ef7A2Xip8AsWUZ8IoZV8VBpLvM",
  authDomain: "lunchproapp.firebaseapp.com",
  projectId: "lunchproapp",
  storageBucket: "lunchproapp.appspot.com",
  messagingSenderId: "152392983898",
  appId: "1:152392983898:web:c984aaa9045dbb47ffbf63",
  measurementId: "G-0Z5YR2M39W"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)