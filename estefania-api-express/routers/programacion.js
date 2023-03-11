const express = require("express");
const { programacion } = require("../datos/cursos.js").infoCursos;
const routerProgramacion = express.Router();

//middleware
routerProgramacion.use(express.json());

const { lenguajeYVistas } = require("../funciones/funciones.js");

//GET
routerProgramacion.get("/", (req, res) => {
  res.json(programacion);
});

routerProgramacion.get("/:lenguaje", lenguajeYVistas);

routerProgramacion.get("/:lenguaje/:nivel", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultados = programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  );
  if (resultados.length === 0) {
    // return res
    //   .status(404)
    //   .send(`No se encontraron cursos de ${lenguaje} en nivel ${nivel}`);
    return res.status(404).end();
  }
  res.json(resultados);
});

//POST
routerProgramacion.post("/", (req, res) => {
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.json(programacion);
});

//PUT
routerProgramacion.put("/:id", (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex((curso) => curso.id == id);
  if (indice >= 0) {
    programacion[indice] = cursoActualizado;
  }
  res.json(programacion);
});

//PATCH -> similar a put, pero actualizas clave/valor

routerProgramacion.patch("/:id", (req, res) => {
  const infoActualizada = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = programacion[indice];
    Object.assign(cursoAModificar, infoActualizada); // esta herramienta me permite agregar lo de infoActualizada a cursoAModificar
  }
  res.json(programacion);
});

//DELETE

routerProgramacion.delete("/:id", (req, res) => {
  const id = req.params.id;
  const indice = programacion.findIndex((curso) => curso.id == id);
  if (indice >= 0) {
    programacion.splice(indice, 1);
  }
  res.json(programacion);
});

module.exports = routerProgramacion;
