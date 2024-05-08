// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC0SMta8b6d2Al5LVzn3kNMCC_fCu3Tcok",
    authDomain: "pawpets-a77fa.firebaseapp.com",
    projectId: "pawpets-a77fa",
    storageBucket: "pawpets-a77fa.appspot.com",
    messagingSenderId: "453040780885",
    appId: "1:453040780885:web:6aeed378efafe8322b06dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();