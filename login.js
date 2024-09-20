// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1orlC8GYZ417PiBcjQ1-PPDrWzh4mBJ0",
  authDomain: "hammad07-82f2a.firebaseapp.com",
  projectId: "hammad07-82f2a",
  storageBucket: "hammad07-82f2a.appspot.com",
  messagingSenderId: "540412279100",
  appId: "1:540412279100:web:bffa51a8cb43fd71ffc639"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);





const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()

  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Creating Account....");
            window.location.href="administration.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
})


