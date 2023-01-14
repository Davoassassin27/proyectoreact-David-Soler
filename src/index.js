import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4osqWxgV5KJ7AMLs5qODIrU1yDhcVYm8",
  authDomain: "proyectoreact-5a458.firebaseapp.com",
  projectId: "proyectoreact-5a458",
  storageBucket: "proyectoreact-5a458.appspot.com",
  messagingSenderId: "717847226934",
  appId: "1:717847226934:web:1f5602322a68222f1cc697",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
