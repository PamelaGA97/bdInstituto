// controllers/MateriaController.js
const Materia = require('../models/Materia');

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

exports.obtenerMateriaPorId = (req, res) => {
  const { idMateria } = req.params;
  
  Materia.obtenerMateriaPorId(idMateria, (err, materia) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener materia' });
    }
    if (!materia) {
      return res.status(404).json({ mensaje: 'Materia no encontrada' });
    }
    res.json(materia);
  });
};

exports.actualizarMateria = (req, res) => {
  const { idMateria } = req.params;
  const datosActualizados = req.body;

  Materia.actualizarMateria(idMateria, datosActualizados, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al actualizar materia' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Materia no encontrada' });
    }
    res.json({ mensaje: 'Materia actualizada con éxito' });
  });
};

exports.eliminarMateria = (req, res) => {
  const { idMateria } = req.params;

  Materia.eliminarMateria(idMateria, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al eliminar materia' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Materia no encontrada' });
    }
    res.json({ mensaje: 'Materia eliminada con éxito' });
  });
};