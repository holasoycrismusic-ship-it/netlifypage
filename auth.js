import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxBG3pfjle1xXYcHuozHs0CgRd-uDwxLo",
  authDomain: "thecrisrecords1.firebaseapp.com",
  projectId: "thecrisrecords1",
  appId: "1:1050112675638:web:a7da5497827fd94dba6d97"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.addEventListener("DOMContentLoaded", () => {

  // 🌍 Idiomas
  let lang = "es";
  const texts = {
    es: {
      login: "Iniciar sesión",
      register: "Registrar sin email"
    },
    en: {
      login: "Sign in",
      register: "Register without email"
    }
  };

  const langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.onclick = () => {
      lang = lang === "es" ? "en" : "es";
      document.getElementById("loginBtn").innerText = texts[lang].login;
      document.getElementById("goRegister").innerText = texts[lang].register;
    };
  }

  // 👉 Ir a registro
  const goRegister = document.getElementById("goRegister");
  if (goRegister) {
    goRegister.onclick = () => {
      window.location.href = "register.html";
    };
  }

  // LOGIN
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.onclick = async () => {
      await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      window.location.href = "dashboard.html";
    };
  }

  // REGISTRO
  const registerBtn = document.getElementById("registerBtn");
  if (registerBtn) {
    await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    window.location.href = "dashboard.html";
  }

  // GOOGLE
  const googleBtn = document.getElementById("loginGoogle");
  if (googleBtn) {
    googleBtn.onclick = async () => {
      await signInWithPopup(auth, provider);
      window.location.href = "dashboard.html";
    };
  }
});

onAuthStateChanged(auth, user => {
  if (user && window.location.pathname.endsWith("index.html")) {
    window.location.href = "dashboard.html";
  }
});