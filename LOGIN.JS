import { auth } from "./FIREBASE.JS";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("Login successful! Welcome back.");
      window.location.href = "index.html"; // Redirect to home page
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
});
