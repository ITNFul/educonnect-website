import { auth } from "./FIREBASE.JS";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("Registration successful! Welcome, " + username);
      window.location.href = "login.html"; // Redirect to login page
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
});
