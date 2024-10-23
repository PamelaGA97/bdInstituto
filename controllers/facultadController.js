// controllers/FacultadController.js
const Facultad = require('../models/facultad');

exports.crearFacultad = (req, res) => {
  const nuevaFacultad = req.body;
  
  Facultad.crearFacultad(nuevaFacultad, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al crear facultad' });
    }
    res.status(201).json({ mensaje: 'Facultad creada con éxito', id: results.insertId });
  });
};

exports.obtenerFacultades = (req, res) => {
  Facultad.obtenerFacultades((err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener facultades' });
    }
    res.json(results);
  });
};