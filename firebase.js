// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV7LvWIGrYihWH9W5eU0kCxMNbNu8IWQs",
  authDomain: "roo-diary.firebaseapp.com",
  projectId: "roo-diary",
  storageBucket: "roo-diary.appspot.com",
  messagingSenderId: "59954873711",
  appId: "1:59954873711:web:737b1fa2a16645b7b9949a",
  measurementId: "G-LPPD38NVYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// ブラウザのみで動作させる
if(typeof window !== 'undefined'){
  const analytics = getAnalytics(app);
}