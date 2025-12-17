import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
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

// ⏳ Esperar DOM SIEMPRE
window.addEventListener("DOMContentLoaded", () => {

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // 🔐 LOGIN (index.html)
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        window.location.href = "dashboard.html";
      } catch (e) {
        alert("Error al iniciar sesión");
        console.error(e);
      }
    });
  }

  // 📝 REGISTRO (register.html)
  const registerBtn = document.getElementById("registerBtn");
  if (registerBtn) {
    registerBtn.addEventListener("click", async () => {
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        window.location.href = "dashboard.html";
      } catch (e) {
        alert("Error al registrarse (email inválido o ya existe)");
        console.error(e);
      }
    });
  }

  // 🌍 GOOGLE (index.html)
  const googleBtn = document.getElementById("googleBtn");
  if (googleBtn) {
    googleBtn.addEventListener("click", async () => {
      try {
        await signInWithPopup(auth, provider);
        window.location.href = "dashboard.html";
      } catch (e) {
        alert("Error con Google");
        console.error(e);
      }
    });
  

  // 👉 Ir a register.html
  const goRegister = document.getElementById("goRegister");
  if (goRegister) {
    goRegister.addEventListener("click", () => {
      window.location.href = "register.html";
    });
  }

});
