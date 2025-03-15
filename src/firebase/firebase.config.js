// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9h9hCYwCM6hixD8vXqVauEU7W6B3AZ8Q",
  authDomain: "coffee-shop-ef86a.firebaseapp.com",
  projectId: "coffee-shop-ef86a",
  storageBucket: "coffee-shop-ef86a.firebasestorage.app",
  messagingSenderId: "395700774937",
  appId: "1:395700774937:web:cab567a119520d3d176288"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);