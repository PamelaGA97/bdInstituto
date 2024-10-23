// controllers/InscripcionController.js
const Inscripcion = require('../models/inscripcion');

exports.crearInscripcion = (req, res) => {
  const nuevaInscripcion = req.body;
  
  Inscripcion.crearInscripcion(nuevaInscripcion, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al crear inscripción' });
    }
    res.status(201).json({ mensaje: 'Inscripción creada con éxito', id: results.insertId });
  });
};

exports.obtenerInscripciones = (req, res) => {
  Inscripcion.obtenerInscripciones((err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener inscripciones' });
    }
    res.json(results);
  });
};