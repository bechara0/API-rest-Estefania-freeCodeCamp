const express = require("express");
const app = express();
const { infoCursos } = require("./datos/cursos.js");
const routerProgramacion = require("./routers/programacion.js");
const routerMat = require("./routers/matematicas.js");

// routers

app.use("/api/cursos/programacion", routerProgramacion);

app.use("/api/cursos/matematicas", routerMat);

// routing

app.get("/", (req, res) => {
  res.send("Mi primer servidor con Express, curso 💻");
});

app.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

// Puerto y escucha del servidor
const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`el servidor esta escuchando en puerto ${PUERTO}...`);
});
