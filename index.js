import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD2FaIhRnaezk3s_P614kzFcpwMoNFymwo",
  authDomain: "delivered-fe351.firebaseapp.com",
  projectId: "delivered-fe351",
  storageBucket: "delivered-fe351.appspot.com",
  messagingSenderId: "785251078704",
  appId: "1:785251078704:web:07f2aa71e961dc024413f5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function displayRestorants(restorants) {
  const restorantsContainer = document.getElementById("restorants-container");
  restorantsContainer.innerHTML = "";

  restorants.forEach((item) => {
    const restorant = item.data();  // Get restaurant data from document

    const Restorant = document.createElement("a");
    Restorant.innerHTML= restorant.restorant;
    Restorant.href = `menu.html?id=${encodeURIComponent(item.id)}&title=${encodeURIComponent(restorant.restorant)}`

    restorantsContainer.appendChild(Restorant);
  });
}

function listenToOrders() {
  const ordersCollection = collection(db, "restorants");

  onSnapshot(ordersCollection, (snapshot) => {
    const restorants = snapshot.docs;
    displayRestorants(restorants);
  });
}

window.onload = listenToOrders;
