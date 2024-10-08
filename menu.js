const menus = [
    { id: 1, restoId: 'ksqm9AKOuzpSZs8vAN9d', name: "Big Mac", price: 5.99 },
    { id: 2, restoId: 'ksqm9AKOuzpSZs8vAN9d', name: "McChicken", price: 4.49 },
    { id: 3, restoId: 'ksqm9AKOuzpSZs8vAN9d', name: "Fries", price: 2.99 },
    { id: 4, restoId: 'ksqm9AKOuzpSZs8vAN9d', name: "Coca Cola", price: 1.99 },
    { id: 5, restoId: 'ksqm9AKOuzpSZs8vAN9d', name: "Nuggets", price: 3.99 },
    { id: 6, restoId: 'ksqm9AKOuzpSZs8vAN9d', name: "Frite", price: 3.99 },
    { id: 7, restoId: 'vvORC1fW6JDXYVGu13bI', name: "Algérienne", price: 3.99 },
    { id: 8, restoId: 'vvORC1fW6JDXYVGu13bI', name: "Barbecue", price: 3.99 },
    { id: 9, restoId: 'vvORC1fW6JDXYVGu13bI', name: "Biggy Burger", price: 3.99 },
    { id: 10, restoId: 'vvORC1fW6JDXYVGu13bI', name: "Eau Aquafina", price: 3.99 },
    { id: 11, restoId: 'vvORC1fW6JDXYVGu13bI', name: "Mirinda Citron", price: 3.99 },
    { id: 12, restoId: 'vvORC1fW6JDXYVGu13bI', name: "Mirinda Pomme", price: 3.99 },
    { id: 13, restoId: 'ka8IOXoMg99pjccKAgoo', name: "Super - Deals", price: 3.99 },
    { id: 14, restoId: 'ka8IOXoMg99pjccKAgoo', name: "Nos Salades", price: 3.99 },
    { id: 15, restoId: 'ka8IOXoMg99pjccKAgoo', name: "Nos Tacos", price: 3.99 },
    { id: 16, restoId: 'ka8IOXoMg99pjccKAgoo', name: "Nos Pizzas", price: 3.99 },
    { id: 17, restoId: 'ka8IOXoMg99pjccKAgoo', name: "Nos Burgers", price: 3.99 },
    { id: 18, restoId: 'ka8IOXoMg99pjccKAgoo', name: "Nos Sandwichs", price: 3.99 },
    { id: 19, restoId: 'DWDbnZpg7s7VkJQXhlhB', name: "Nouveautés", price: 3.99 },
    { id: 20, restoId: 'DWDbnZpg7s7VkJQXhlhB', name: "Promos", price: 3.99 },
    { id: 21, restoId: 'DWDbnZpg7s7VkJQXhlhB', name: "Burgers", price: 3.99 },
    { id: 22, restoId: 'DWDbnZpg7s7VkJQXhlhB', name: "Menus Enfants", price: 3.99 },
    { id: 23, restoId: 'DWDbnZpg7s7VkJQXhlhB', name: "Desserts", price: 3.99 },
    { id: 24, restoId: 'DWDbnZpg7s7VkJQXhlhB', name: "Boissons", price: 3.99 },
    { id: 25, restoId: 'SRvoyoe3NWxHTCiUxezq', name: "Glaces & Desserts", price: 3.99 },
    { id: 26, restoId: 'SRvoyoe3NWxHTCiUxezq', name: "Boissons", price: 3.99 },
    { id: 27, restoId: 'SRvoyoe3NWxHTCiUxezq', name: "Pizzas - Pâte Thin", price: 3.99 },
    { id: 28, restoId: 'SRvoyoe3NWxHTCiUxezq', name: "Pizzas - Pâte Pan", price: 3.99 },
    { id: 29, restoId: 'SRvoyoe3NWxHTCiUxezq', name: "Pizzas - Pâte Cheezy Crust", price: 3.99 },
    { id: 30, restoId: 'SRvoyoe3NWxHTCiUxezq', name: "Sandwichs & Calzones", price: 3.99 },
    { id: 31, restoId: 'R5IuzgH3hsUkP2o1t2bX', name: "Buckets", price: 3.99 },
    { id: 32, restoId: 'R5IuzgH3hsUkP2o1t2bX', name: "Exclusive Promotions", price: 3.99 },
    { id: 33, restoId: 'R5IuzgH3hsUkP2o1t2bX', name: "Boxes", price: 3.99 },
    { id: 34, restoId: 'R5IuzgH3hsUkP2o1t2bX', name: "Menus", price: 3.99 },
    { id: 35, restoId: 'R5IuzgH3hsUkP2o1t2bX', name: "Sandwich", price: 3.99 },
    { id: 36, restoId: 'R5IuzgH3hsUkP2o1t2bX', name: "Sides & Drinks", price: 3.99 },
    { id: 37, restoId: 'OW0EDQfldeGFGa9KFrNk', name: "Boucherie", price: 3.99 },
    { id: 38, restoId: 'OW0EDQfldeGFGa9KFrNk', name: "Volaille", price: 3.99 },
    { id: 39, restoId: 'OW0EDQfldeGFGa9KFrNk', name: "Poissonnerie", price: 3.99 },
    { id: 40, restoId: 'OW0EDQfldeGFGa9KFrNk', name: "Traiteur de la Mer", price: 3.99 },
    { id: 41, restoId: 'OW0EDQfldeGFGa9KFrNk', name: "Fruits", price: 3.99 },
    { id: 42, restoId: 'OW0EDQfldeGFGa9KFrNk', name: "Prêt à manger", price: 3.99 },
];
const title = document.getElementById('menu-title');
const urlParams = new URLSearchParams(window.location.search);
const ID = urlParams.get('id');
const menu = menus.filter((item) => item.restoId == ID);
const TITLE = urlParams.get('title');
title.innerHTML = `${TITLE} menu`

let cart = [];

function renderMenu() {
    const menuContainer = document.getElementById("menu");
    menuContainer.innerHTML = ""; // Clear existing items

    menu.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        menuItem.innerHTML = `
            <h3>${item.name}</h3>
            <p class="price">$${item.price.toFixed(2)}</p>
            <div class="quantity-controls">
                <button onclick="changeQuantity(${item.id}, -1)">-</button>
                <span id="quantity-${item.id}">1</span>
                <button onclick="changeQuantity(${item.id}, 1)">+</button>
            </div>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;

        menuContainer.appendChild(menuItem);
    });
}

function changeQuantity(itemId, change) {
    const quantityElement = document.getElementById(`quantity-${itemId}`);
    let currentQuantity = parseInt(quantityElement.innerText);
    if (currentQuantity + change > 0) {
        quantityElement.innerText = currentQuantity + change;
    }
}

function addToCart(itemId) {
    const quantity = parseInt(document.getElementById(`quantity-${itemId}`).innerText);
    const item = menu.find((item) => item.id === itemId);
    const cartItem = cart.find((cartItem) => cartItem.id === itemId);

    if (cartItem) {
        cartItem.quantity += quantity; // Update quantity if item already in cart
    } else {
        cart.push({ ...item, quantity });
    }

    renderCart();
}

function renderCart() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = ""; // Clear existing cart items

    let totalPrice = 0;

    cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
            <p>${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</p>
        `;

        totalPrice += item.price * item.quantity;
        cartContainer.appendChild(cartItem);
    });

    document.getElementById("total-price").innerText = `$${totalPrice.toFixed(2)}`;
}

document.getElementById("confirm-order").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert("Order confirmed!");
        cart = []; // Clear cart after confirmation
        renderCart();
    }
});

renderMenu();