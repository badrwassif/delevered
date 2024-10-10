import { collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { db } from "./firebase.js";


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
