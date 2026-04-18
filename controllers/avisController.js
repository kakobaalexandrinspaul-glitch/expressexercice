const { livres } = require("./livresController");

exports.form = (req, res) => {
  const id = req.params.id;
  res.render("avis", { id });
};

exports.add = (req, res) => {
  const id = req.params.id;
  const message = req.body.message;

  // sécurité importante
  if (!livres[id]) {
    return res.send("Livre introuvable");
  }

  if (!livres[id].avis) {
    livres[id].avis = [];
  }

  livres[id].avis.push(message);

  res.render("avisConfirmation", { message });
};
