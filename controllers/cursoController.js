// controllers/CursoController.js
const Curso = require('../models/curso');

exports.crearCurso = (req, res) => {
  const nuevoCurso = req.body;
  
  Curso.crearCurso(nuevoCurso, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al crear curso' });
    }
    res.status(201).json({ mensaje: 'Curso creado con éxito', id: results.insertId });
  });
};

exports.obtenerCursos = (req, res) => {
  Curso.obtenerCursos((err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener cursos' });
    }
    res.json(results);
  });
};