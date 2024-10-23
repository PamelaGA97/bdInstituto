// controllers/MateriaController.js
const Materia = require('../models/materia');

exports.crearMateria = (req, res) => {
  const nuevaMateria = req.body;
  
  Materia.crearMateria(nuevaMateria, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al crear materia' });
    }
    res.status(201).json({ mensaje: 'Materia creada con éxito', id: results.insertId });
  });
};

exports.obtenerMaterias = (req, res) => {
  Materia.obtenerMaterias((err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener materias' });
    }
    res.json(results);
  });
};