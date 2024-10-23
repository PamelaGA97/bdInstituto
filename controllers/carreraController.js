// controllers/CarreraController.js
const Carrera = require('../models/carrera');

exports.crearCarrera = (req, res) => {
  const nuevaCarrera = req.body;
  
  Carrera.crearCarrera(nuevaCarrera, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al crear carrera' });
    }
    res.status(201).json({ mensaje: 'Carrera creada con éxito', id: results.insertId });
  });
};

exports.obtenerCarreras = (req, res) => {
  Carrera.obtenerCarreras((err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener carreras' });
    }
    res.json(results);
  });
};