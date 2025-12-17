import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
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

  // 🌍 Idioma
  let lang = "es";
  const texts = {
    es: {
      login: "Iniciar sesión",
      register: "Registrar sin email",
      google: "Registrarse con Google"
    },
    en: {
      login: "Sign in",
      register: "Register without email",
      google: "Sign up with Google"
    }
  };

  const langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.onclick = () => {
      lang = lang === "es" ? "en" : "es";
      document.getElementById("loginBtn").innerText = texts[lang].login;
      document.getElementById("goRegister").innerText = texts[lang].register;
      document.getElementById("googleBtn").innerText = texts[lang].google;
    };
  }

  // 👉 Ir a register
  const goRegister = document.getElementById("goRegister");
  if (goRegister) {
    goRegister.onclick = () => {
      window.location.href = "register.html";
    };
  }

  // LOGIN EMAIL
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.onclick = async () => {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      window.location.href = "dashboard.html";
    };
  }

  // REGISTRO EMAIL
  const registerBtn = document.getElementById("registerBtn");
  if (registerBtn) {
    registerBtn.onclick = async () => {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      window.location.href = "dashboard.html";
    };
  }

  // GOOGLE
  const googleBtn = document.getElementById("googleBtn");
  if (googleBtn) {
    googleBtn.onclick = async () => {
      await signInWithPopup(auth, provider);
      window.location.href = "dashboard.html";
    };
  }

});