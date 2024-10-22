import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyD2FaIhRnaezk3s_P614kzFcpwMoNFymwo",
    authDomain: "delivered-fe351.firebaseapp.com",
    projectId: "delivered-fe351",
    storageBucket: "delivered-fe351.appspot.com",
    messagingSenderId: "785251078704",
    appId: "1:785251078704:web:07f2aa71e961dc024413f5"
  };


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);