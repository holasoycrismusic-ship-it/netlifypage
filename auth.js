import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

/* 🔥 FIREBASE CONFIG */
const firebaseConfig = {
  apiKey: "AIzaSyBxBG3pfjle1xXYcHuozHs0CgRd-uDwxLo",
  authDomain: "thecrisrecords1.firebaseapp.com",
  projectId: "thecrisrecords1",
  appId: "1:1050112675638:web:a7da5497827fd94dba6d97"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

/* 🧠 LOGIN CON GOOGLE */
const googleBtn = document.getElementById("loginGoogle");
googleBtn?.addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);

    // ✅ GUARDAMOS EMAIL PARA ADMIN
    localStorage.setItem("userEmail", result.user.email);

    window.location.href = "dashboard.html";
  } catch (error) {
    console.error(error);
    alert("Error con Google");
  }
});

/* 🔐 LOGIN EMAIL / PASSWORD */
document.getElementById("loginBtn")?.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  try {
    const result = await signInWithEmailAndPassword(auth, email, pass);

    localStorage.setItem("userEmail", result.user.email);
    window.location.href = "dashboard.html";
  } catch {
    alert("Credenciales incorrectas");
  }
});

/* 📝 REGISTRO EMAIL / PASSWORD */
document.getElementById("registerBtn")?.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  try {
    const result = await createUserWithEmailAndPassword(auth, email, pass);

    localStorage.setItem("userEmail", result.user.email);
    window.location.href = "dashboard.html";
  } catch {
    alert("Error al registrar");
  }
});

/* 🔄 CONTROL DE SESIÓN (SIN REDIRECCIONES FALSAS) */
let authReady = false;

onAuthStateChanged(auth, user => {
  if (!user && authReady) {
    window.location.href = "index.html";
  }
  authReady = true;
});