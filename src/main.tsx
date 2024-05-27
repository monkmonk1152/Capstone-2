
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDabFJHhHzUEQG25O_zPFV_ROVLX0iIjrI",
  authDomain: "capstone-ce99d.firebaseapp.com",
  projectId: "capstone-ce99d",
  storageBucket: "capstone-ce99d.appspot.com",
  messagingSenderId: "484154771014",
  appId: "1:484154771014:web:63aa4589382443e5762c47",
  measurementId: "G-6F7KM6MJYC",
  databaseURL: "https://capstone-ce99d-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function writeUserData(
  customer_id: string,
  name: string,
  email: string,
  phone: string,
  address: string
) {
  const db = getDatabase();
  set(ref(db, "customers/" + customer_id), {
    username: name,
    email: email,
    phone: phone,
    address: address,
  });
}

// Function to write dog data to the database
function writeDogData(
  dog_info: string,
  name: string,
  breed: string,
  size: string,
  color: string,
  owner: string
) {
  const db = getDatabase();
  set(ref(db, "dogs_info/" + dog_info), {
    name: name,
    breed: breed,
    color: color,
    size: size,
    owner: owner,
  });
}

// Sample data
writeUserData(
  "123",
  "John Doe",
  "john@example.com",
  "1234567890",
  "123 Main St"
);
writeUserData(
  "785",
  "Cody Davis",
  "davis@example.com",
  "4044044400",
  "13 Elm St"
);
writeUserData(
  "324",
  "Tim Eason",
  "Eason@example.com",
  "6788876798",
  "10 Downy Ln"
);

writeDogData(
  "1",
  "Neville",
  "Lab/Husky Mix",
  "Lg",
  "Black",
  "Christopher Eason"
);
writeDogData("785", "Chili", "Pitbull", "Lg", "Grey", "Shawn Tallman");
writeDogData("324", "Brute", "Cane Corso", "XLg", "Grey/Black", "Cody Davis");

const Auth: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, update state accordingly
        setLoggedIn(true);
        console.log("Signed-in user:", user);
      } else {
        // No user is signed in, redirect to sign-in
        setLoggedIn(false);
        signInWithRedirect(auth, provider);
      }
    });

    getRedirectResult(auth).then((result) => {
      if (result) {
        const user = result.user;
        setLoggedIn(true);
        console.log("Redirect login successful for:", user);
      }
    }).catch((error) => {
      console.error("Error obtaining redirect result:", error);
    });
  }, []);

  if (!isLoggedIn) {
    return (
      <div>
        <h1>Welcome to the App</h1>
        <p>Please wait, signing you in...</p>
      </div>
    );
  } else {
    return null;
  }
};






export default Auth;

// Main App component
const MainApp: React.FC = () => {
  return (
    <React.StrictMode>
      <Auth />
      <App />
    </React.StrictMode>
  );
};

// Render React application
ReactDOM.createRoot(document.getElementById("root")!).render(<MainApp />);

export const Firebase = initializeApp(firebaseConfig)
