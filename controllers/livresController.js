const livres = [
  {
    id: 0,
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    annee: 1943,
    resume: "Un pilote rencontre un petit prince.",
    avis: ["Très bon livre", "Classique incontournable"],
  },
  {
    id: 1,
    titre: "1984",
    auteur: "George Orwell",
    annee: 1949,
    resume: "Dystopie sur un régime totalitaire.",
    avis: ["Flippant", "Très réaliste"],
  },
  {
    id: 2,
    titre: "L'Alchimiste",
    auteur: "Paulo Coelho",
    annee: 1988,
    resume: "Un voyage spirituel.",
    avis: ["Inspirant", "Motivant"],
  },
];

exports.list = (req, res) => {
  res.render("livres", { livres });
};

exports.detail = (req, res) => {
  const livre = livres[req.params.id];
  res.render("detail", { livre });
};

exports.form = (req, res) => {
  res.render("ajouter");
};

exports.add = (req, res) => {
  const { titre, auteur, annee, resume } = req.body;

  const nouveau = {
    id: livres.length,
    titre,
    auteur,
    annee,
    resume,
    avis: [],
  };

  livres.push(nouveau);

  res.render("confirmation", { livre: nouveau });
};

module.exports.livres = livres;

