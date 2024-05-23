import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {initializeApp} from "firebase/app"
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, UserCredential, getAuth, getRedirectResult } from "firebase/auth";
import { signOut } from "firebase/auth";









const auth = getAuth();
getRedirectResult(auth)
  .then((result: UserCredential | null) => {
    if (result !== null) {
      // Check if the result contains valid credential data
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential !== null) {
        const token = credential.accessToken;
        // Use the token or perform any necessary actions
        console.log("Access token:", token);
      }

      // Get the signed-in user info
      const user = result.user;
      if (user) {
        // Perform actions based on the user's authentication status
        console.log("Signed-in user:", user);
      } else {
        // Handle the scenario where user data is not available
        console.log("User not signed in");
      }

      // IdP data available using getAdditionalUserInfo(result)
      // ...
    } else {
      // Handle the scenario where result is null
      console.log("Redirect result is null");
    }
  })
  .catch((error) => {
    // Handle Errors here
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error:", errorMessage);

    // Extract additional information from the error object if available
    if (error.customData && error.customData.email) {
      const email = error.customData.email;
      console.log("User email:", email);
    }

    // Check if the error contains credential data
    const credential = GoogleAuthProvider.credentialFromError(error);
    if (credential !== null) {
      console.error("Credential error:", credential);
    }
  
  });


getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((_error) => {
  // An error happened.
});




const firebaseConfig = {
    apiKey: "AIzaSyDabFJHhHzUEQG25O_zPFV_ROVLX0iIjrI",
    authDomain: "capstone-ce99d.firebaseapp.com",
    projectId: "capstone-ce99d",
    storageBucket: "capstone-ce99d.appspot.com",
    messagingSenderId: "484154771014",
    appId: "1:484154771014:web:63aa4589382443e5762c47",
    measurementId: "G-6F7KM6MJYC",
    databaseURL: "https://capstone-ce99d-default-rtdb.firebaseio.com/"
  };
  initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


import { ref, set } from "firebase/database";

function writeUserData(customer_id: string, name: string, email: string, _phone:string, _address:string) {
  const db = getDatabase();
  set(ref(db, 'customers/' + customer_id), {
    username: name,
    email: email,
    phone: _phone,
    address: _address
  });
}

function writeDogData(dog_info: string, name: string, breed: string, size: string, color: string, _owner: string) {
  const db = getDatabase();
  set(ref(db, 'dogs_info/' + dog_info), {
    name: name,
    breed: breed,
    color: color,
    size: size,
    owner: _owner,
  });
}

writeUserData("123", "John Doe", "john@example.com", "1234567890", "123 Main St");
writeUserData("785", "Cody Davis", "davis@example.com", "4044044400", "13 Elm St");
writeUserData("324", "Tim Eason", "Eason@example.com", "6788876798", "10 downy Ln");

writeDogData("1", "Neville", "Lab/Husky Mix", "Lg", "Black", 'Christopher Eason');
writeDogData("785", "Chili", "Pitbull", "Lg", "Grey", 'Shawn Tallman');
writeDogData("324", "Brute", "Cane Corso", "XLg", "Grey/ Black", 'Cody Davis');