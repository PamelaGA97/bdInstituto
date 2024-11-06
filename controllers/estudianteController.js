// controllers/EstudianteController.js
const Estudiante = require('../models/Estudiante');

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

exports.obtenerEstudiantePorId = (req, res) => {
  const { idEstudiante } = req.params;
  
  Estudiante.obtenerEstudiantePorId(idEstudiante, (err, estudiante) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener estudiante' });
    }
    if (!estudiante) {
      return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    }
    res.json(estudiante);
  });
};

exports.actualizarEstudiante = (req, res) => {
  const { idEstudiante } = req.params;
  const datosActualizados = req.body;

  Estudiante.actualizarEstudiante(idEstudiante, datosActualizados, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al actualizar estudiante' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    }
    res.json({ mensaje: 'Estudiante actualizado con éxito' });
  });
};

exports.eliminarEstudiante = (req, res) => {
  const { idEstudiante } = req.params;

  Estudiante.eliminarEstudiante(idEstudiante, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al eliminar estudiante' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    }
    res.json({ mensaje: 'Estudiante eliminado con éxito' });
  });
};