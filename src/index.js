// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH7mL-VIB20zB4YGVgdQjOpzcqtYGgmu8",
  authDomain: "fir-rnd-86b13.firebaseapp.com",
  projectId: "fir-rnd-86b13",
  storageBucket: "fir-rnd-86b13.appspot.com",
  messagingSenderId: "920362019566",
  appId: "1:920362019566:web:4e0cf69fec8e0922e861ff",
  measurementId: "G-TXTD44WS1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app);