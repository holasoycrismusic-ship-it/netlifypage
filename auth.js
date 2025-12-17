import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
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

// SOLO redirigir si estamos en index.html
onAuthStateChanged(auth, user => {
  if (user && window.location.pathname.endsWith("index.html")) {
    window.location.href = "dashboard.html";
  }
});

const btn = document.getElementById("loginGoogle");
if (btn) {
  btn.addEventListener("click", async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "dashboard.html";
    } catch (e) {
      alert("Error al iniciar sesión");
      console.error(e);
    }
  });
}