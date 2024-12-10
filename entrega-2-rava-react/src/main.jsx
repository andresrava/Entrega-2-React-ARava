import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlmysNox5VWi4DEkMPXf8l7h6gzxuvIfA",
  authDomain: "ensayoreact-249f6.firebaseapp.com",
  projectId: "ensayoreact-249f6",
  storageBucket: "ensayoreact-249f6.firebasestorage.app",
  messagingSenderId: "16066801087",
  appId: "1:16066801087:web:7170e5a306c6105495050a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
    
  
)
