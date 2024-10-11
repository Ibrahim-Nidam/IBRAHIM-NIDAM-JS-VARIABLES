let anneeNaissance = 1998;
let anneeActuel = new Date().getFullYear();

console.log(
  "L'age en " +
    anneeActuel +
    " pour une personne née en " +
    anneeNaissance +
    " est : " +
    (anneeActuel - anneeNaissance) +
    " ans."
);
