// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrDpH2tArTbdO7soAE-YX8baTzHYuGo5E",
  authDomain: "mateus-duraes-dev.firebaseapp.com",
  projectId: "mateus-duraes-dev",
  storageBucket: "mateus-duraes-dev.appspot.com",
  messagingSenderId: "1044554489430",
  appId: "1:1044554489430:web:4c325ac07ebf12adea25f7",
  measurementId: "G-YL7CXXMMT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app