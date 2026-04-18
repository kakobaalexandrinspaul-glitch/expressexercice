
const express = require("express");
const path = require("path");

const app = express();

// Controllers
const homeController = require("./controllers/homeController");
const livresController = require("./controllers/livresController");
const avisController = require("./controllers/avisController");

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ROUTES
app.get("/", homeController.index);

app.get("/livres", livresController.list);
app.get("/livres/ajouter", livresController.form);
app.post("/livres/ajouter", livresController.add);

app.get("/livres/:id", livresController.detail);

app.get("/livres/:id/avis", avisController.form);
app.post("/livres/:id/avis", avisController.add);

// START SERVER
app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.get("/livres/recherche", (req, res) => {
  const q = req.query.q;

  res.send("Recherche pour : " + q);
});
app.post("/livres/:id/supprimer", (req, res) => {
  const id = req.params.id;

  res.send("Livre supprimé : " + id);
});