import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
getAnalytics(app);

export default app