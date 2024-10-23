// controllers/EstudianteController.js
const Estudiante = require('../models/estudiante');

exports.crearEstudiante = (req, res) => {
  const nuevoEstudiante = req.body;
  
  Estudiante.crearEstudiante(nuevoEstudiante, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al crear estudiante' });
    }
    res.status(201).json({ mensaje: 'Estudiante creado con éxito', id: results.insertId });
  });
};

exports.obtenerEstudiantes = (req, res) => {
  Estudiante.obtenerEstudiantes((err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener estudiantes' });
    }
    res.json(results);
  });
};