// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKTZgSxEougjo6uvy9T0JqVFdynnNElq0",
  authDomain: "fashionx-e9cf5.firebaseapp.com",
  projectId: "fashionx-e9cf5",
  storageBucket: "fashionx-e9cf5.appspot.com",
  messagingSenderId: "708540680661",
  appId: "1:708540680661:web:069d97d524199aec5e955c",
  measurementId: "G-YC59E38P3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
