import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyALn8xKWgPI9g1zsd-90pYdVHS3u2-THMA",
  authDomain: "fir-auth-1-a2aec.firebaseapp.com",
  projectId: "fir-auth-1-a2aec",
  storageBucket: "fir-auth-1-a2aec.appspot.com",
  messagingSenderId: "145857010887",
  appId: "1:145857010887:web:e389e6a7a83d7e5491f2e2",
  measurementId: "G-V01K9S1W5Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { auth, app };
