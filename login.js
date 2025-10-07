import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhpWoDJZt-u1BYZC7174rN0HrXpgIhNwY",
  authDomain: "lwanaggestion.firebaseapp.com",
  projectId: "lwanaggestion",
  storageBucket: "lwanaggestion.appspot.com",
  messagingSenderId: "105244880149",
  appId: "1:105244880149:web:74761213a3ac5b3778801c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    const userDoc = await getDoc(doc(db, "utilisateurs", uid));
    if (userDoc.exists()) {
      const role = userDoc.data().role;
      document.getElementById("message").textContent = `✅ Connecté en tant que ${role}`;

      // Redirection selon le rôle
      if (role === "prefetEtudes") {
        window.location.href = "dashboard_prefet.html";
      } else if (role === "enseignant") {
        window.location.href = "dashboard_enseignant.html";
      } else {
        window.location.href = "dashboard_general.html";
      }
    } else {
      document.getElementById("message").textContent = "❌ Rôle non défini.";
    }
  } catch (error) {
    document.getElementById("message").textContent = "❌ Erreur de connexion.";
    console.error(error);
  }
});
