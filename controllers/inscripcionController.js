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

exports.obtenerInscripcionPorId = (req, res) => {
  const { idInscripcion } = req.params;
  
  Inscripcion.obtenerInscripcionPorId(idInscripcion, (err, inscripcion) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener inscripción' });
    }
    if (!inscripcion) {
      return res.status(404).json({ mensaje: 'Inscripción no encontrada' });
    }
    res.json(inscripcion);
  });
};

exports.actualizarInscripcion = (req, res) => {
  const { idInscripcion } = req.params;
  const datosActualizados = req.body;

  Inscripcion.actualizarInscripcion(idInscripcion, datosActualizados, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al actualizar inscripción' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Inscripción no encontrada' });
    }
    res.json({ mensaje: 'Inscripción actualizada con éxito' });
  });
};

exports.eliminarInscripcion = (req, res) => {
  const { idInscripcion } = req.params;

  Inscripcion.eliminarInscripcion(idInscripcion, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al eliminar inscripción' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Inscripción no encontrada' });
    }
    res.json({ mensaje: 'Inscripción eliminada con éxito' });
  });
};