import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// 🔐 Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBxBG3pfjle1xXYcHuozHs0CgRd-uDwxLo",
  authDomain: "thecrisrecords1.firebaseapp.com",
  projectId: "thecrisrecords1",
  appId: "1:1050112675638:web:a7da5497827fd94dba6d97"
};

// 🚀 Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ⏳ Esperar DOM
window.addEventListener("DOMContentLoaded", () => {

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  // LOGIN EMAIL
  document.getElementById("loginBtn").addEventListener("click", async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        emailInput.value,
        passwordInput.value
      );
      window.location.href = "dashboard.html";
    } catch (e) {
      alert("Credenciales incorrectas");
      console.error(e);
    }
  });

  // REGISTRO EMAIL
  document.getElementById("registerBtn").addEventListener("click", async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailInput.value,
        passwordInput.value
      );
      window.location.href = "dashboard.html";
    } catch (e) {
      alert("Error al registrar (email inválido o ya existe)");
      console.error(e);
    }
  });

  // GOOGLE
  document.getElementById("loginGoogle").addEventListener("click", async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "dashboard.html";
    } catch (e) {
      alert("Error con Google");
      console.error(e);
    }
  });

});

// 🔄 Auto-redirect si ya está logueado
onAuthStateChanged(auth, user => {
  if (user) {
    window.location.href = "dashboard.html";
  }
});