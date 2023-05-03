// Générer un nombre aléatoire entre 1 et 100
const nombreAleatoire = Math.floor(Math.random() * 100) + 1;

// Fonction pour vérifier l'estimation de l'utilisateur
function verifierEstimation() {
  const inputEstimation = document.getElementById("guessInput");
  const message = document.getElementById("message");

  // Récupérer l'estimation de l'utilisateur depuis le champ de saisie
  const estimationUtilisateur = parseInt(inputEstimation.value);

  // Vérifier si l'estimation de l'utilisateur est correcte
  if (estimationUtilisateur === nombreAleatoire) {
    message.innerHTML = "Félicitations ! Tu as deviné le bon nombre !";
  } else if (estimationUtilisateur < nombreAleatoire) {
    message.innerHTML = "Trop bas ! Essaye avec un nombre plus grand.";
  } else {
    message.innerHTML = "Trop haut ! Essaye avec un nombre plus petit.";
  }

  // Effacer le champ de saisie
  inputEstimation.value = "";
}
