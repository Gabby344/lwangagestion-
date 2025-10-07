import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAhpWoDJZt-u1BYZC7174rN0HrXpgIhNwY",
  authDomain: "lwanaggestion.firebaseapp.com",
  projectId: "lwanaggestion",
  storageBucket: "lwanaggestion.appspot.com",
  messagingSenderId: "105244880149",
  appId: "1:105244880149:web:74761213a3ac5b3778801c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fonction pour ajouter un utilisateur
async function ajouterUtilisateur(id, nom, email, role) {
  try {
    await setDoc(doc(db, "utilisateurs", id), {
      nom: nom,
      email: email,
      role: role,
      fonction: role,
      dateAjout: new Date()
    });
    document.getElementById("confirmation").textContent = "✅ Utilisateur ajouté avec succès !";
  } catch (e) {
    console.error("❌ Erreur :", e);
    document.getElementById("confirmation").textContent = "❌ Échec de l'ajout.";
  }
}

// Gestion du formulaire
document.getElementById("formAjoutUtilisateur").addEventListener("submit", async (e) => {
  e.preventDefault();
  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const role = document.getElementById("role").value;

  const id = `${role}_${Date.now()}`; // ID unique basé sur le rôle + timestamp
  await ajouterUtilisateur(id, nom, email, role);
});
