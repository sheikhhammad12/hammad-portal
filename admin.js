
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

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
const db = getFirestore(app);





// document.getElementById("submit").addEventListener('click', function (e) {
//   e.preventDefault();
//   set(ref(db, 'user/' + document.getElementById("fname").value),
//     {

const submit=document.getElementById("submit");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Cnic = document.getElementById("Cnic");
const utype = document.getElementById("utype");



  window.saveStudent = () => {
    let obj = {
      fname: fname.value,
      lname: lname.value,
      email: email.value,
      password: password.value,
      cnic: Cnic.value,
      utype: utype.value,
      submit: submit.value
    };

    console.log(obj);
  

    const reference = collection(db,"students");
    addDoc(reference, obj)
      .then(() => {
        console.log("Saved Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
