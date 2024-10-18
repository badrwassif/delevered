import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 
const code = document.getElementById('code');
const recaptchaContainer = document.getElementById('recaptcha-container');

let phonesCod = [];

// Function to listen to phone codes
async function listenToPhonesCode() {
    const response = await fetch('https://parseapi.back4app.com/classes/Continentscountriescities_Country?limit=251&order=name&keys=name,code,phone,native', {
        headers: {
            'X-Parse-Application-Id': 'fOkLnJttWQzJ7A8Gp4t9JQSuXQvHbh3aSUI8tNfC',
            'X-Parse-REST-API-Key': 'yFv55vg1kY0ipsYXjenok5PYhW8xcGSjMe4GFVqH',
        }
    });
    const data = await response.json();
    phonesCod = data.results;
    phonesCod.forEach(item => {
        const option = document.createElement('option');
        option.innerHTML = `+${item.phone} (${item.name})`;
        option.value = item.phone;
        code.appendChild(option);
    });
}

// Function to send OTP
async function sendOTP(phoneNumber) {
    const appVerifier = window.recaptchaVerifier;
    return await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
}

// Form submission handling firebase
document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const fullName = document.getElementById('full-name').value.trim();
    const phoneNumber = `+${code.value}${document.getElementById('phone-number').value.trim()}`;
    console.log(phoneNumber)
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    // Check if phone number is valid
    if (!/^\+\d{1,3}\d{1,14}$/.test(phoneNumber)) {
        alert("Invalid phone number format. Please enter a valid phone number.");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
        const confirmationResult = await sendOTP(phoneNumber);
        window.confirmationResult = confirmationResult; // Store confirmation result to verify OTP later
        document.getElementById('otp-container').style.display = 'block'; // Show OTP input
        document.getElementById('signup-button').disabled = true; // Disable signup button
    } catch (error) {
        console.error("Error sending OTP:", error);
        alert("Failed to send OTP. Please ensure your phone number is correct and try again.");
    }
});

// Handle OTP verification
document.getElementById('otp').addEventListener('input', async (e) => {
    const otp = e.target.value;
    if (otp.length === 6) { // Assuming OTP is 6 digits
        try {
            const result = await window.confirmationResult.confirm(otp);
            console.log("User signed in successfully:", result.user);
            alert("Signup successful!");
            // Additional logic can go here, like storing user details in Firestore
        } catch (error) {
            console.error("Error verifying OTP:", error);
            alert("Invalid OTP. Please try again.");
        }
    }
});

// Load phone codes
listenToPhonesCode();
