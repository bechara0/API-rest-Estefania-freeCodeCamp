const { infoCursos } = require("../datos/cursos.js");

function lenguajeYVistas(req, res) {
  const lenguaje = req.params.lenguaje;
  const resultados = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  );
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos para ${lenguaje}`);
  }

  if (req.query.ordenar === "vistas") {
    // acá uso query para ordenar por vistas (en el navegador /?ordenar=vistas)
    return res.send(
      JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas))
    );
  } else {
    res.send(JSON.stringify(resultados));
  }
}

function temasYVistas(req, res) {
  const tema = req.params.tema;
  const resultados = infoCursos.matematicas.filter(
    (curso) => curso.tema === tema
  );
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos para ${tema}`);
  }

  if (req.query.ordenar === "vistas") {
    // acá uso query para ordenar por vistas (en el navegador /?ordenar=vistas)
    return res.send(
      JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas))
    );
  } else {
    res.send(JSON.stringify(resultados));
  }
}

module.exports = { lenguajeYVistas, temasYVistas };
