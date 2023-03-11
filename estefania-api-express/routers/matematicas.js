const express = require("express");
const { matematicas } = require("../datos/cursos.js").infoCursos;
const routerMat = express.Router();
const { temasYVistas } = require("../funciones/funciones.js");

routerMat.get("/", (req, res) => {
  res.send(JSON.stringify(matematicas));
});

routerMat.get("/:tema", temasYVistas);

routerMat.get("/:tema", (req, res) => {
  const tema = req.params.tema;
  const resultados = matematicas.filter((curso) => curso.tema === tema);
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos para ${tema}.`);
  }
  res.send(JSON.stringify(resultados));
});

module.exports = routerMat;
