// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChYC_6_ka26eGSt9RrQ3OtHGXPEqOqWMI",
  authDomain: "node-lightfirebase.firebaseapp.com",
  databaseURL: "https://node-lightfirebase-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "node-lightfirebase",
  storageBucket: "node-lightfirebase.appspot.com",
  messagingSenderId: "10653227048",
  appId: "1:10653227048:web:751cbe7e195e5e2b87bd1d",
  measurementId: "G-QBCPGK9HBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);