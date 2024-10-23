// controllers/DocenteController.js
const Docente = require('../models/docente');

exports.crearDocente = (req, res) => {
  const nuevoDocente = req.body;
  
  Docente.crearDocente(nuevoDocente, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al crear docente' });
    }
    res.status(201).json({ mensaje: 'Docente creado con éxito', id: results.insertId });
  });
};

exports.obtenerDocentes = (req, res) => {
  Docente.obtenerDocentes((err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener docentes' });
    }
    res.json(results);
  });
};