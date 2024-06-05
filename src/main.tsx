
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
  
  name: string,
  email: string,
  phone_number: string,
  job_title: string,
  breed: string,
  dog_name: string
) {
  const db = getDatabase();
  set(ref(db, "contacts/" + name ), {
    name: name,
    email: email,
    phone_number: phone_number,
    job_title: job_title,
    breed: breed,
    dog_name: dog_name
  });
}




// Sample data

writeUserData(
  "Cody Davis",
  "davis@example.com",
  "4044044400",
  "trianer",
  "lab",
  "Rex"
);
writeUserData(
  "Shawn Tallman",
  "tallman@example.com",
  "4045567676",
  "trianer",
  "pitbull mix",
  "chili"
);



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


