import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAhpWoDJZt-u1BYZC7174rN0HrXpgIhNwY",
  authDomain: "lwanaggestion.firebaseapp.com",
  projectId: "lwanaggestion",
  storageBucket: "lwanaggestion.appspot.com",
  messagingSenderId: "105244880149",
  appId: "1:105244880149:web:74761213a3ac5b3778801c"
};

// Initialisation
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fonction d’ajout
async function ajouterEleve(nom, postNom, prenom) {
  try {
    const docRef = await addDoc(collection(db, "eleves"), {
      nom: nom,
      postNom: postNom,
      prenom: prenom,
      dateAjout: new Date()
    });
    document.getElementById("confirmation").textContent = "✅ Élève ajouté avec succès !";
  } catch (e) {
    console.error("Erreur :", e);
    document.getElementById("confirmation").textContent = "❌ Erreur lors de l'ajout.";
  }
}

// Gestion du formulaire
document.getElementById("formEleve").addEventListener("submit", (e) => {
  e.preventDefault();
  const nom = document.getElementById("nom").value.trim();
  const postNom = document.getElementById("postNom").value.trim();
  const prenom = document.getElementById("prenom").value.trim();
  ajouterEleve(nom, postNom, prenom);
});
prenom);
});
ajouterUtilisateur(
  "admin001", // identifiant du document
  "Gabby Umba",
  "gabby@example.com",
  "prefetEtudes",
  "Préfet des études"
);

