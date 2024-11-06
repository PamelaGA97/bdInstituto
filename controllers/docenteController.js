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

exports.obtenerDocentePorId = (req, res) => {
  const { idDocente } = req.params;
  
  Docente.obtenerDocentePorId(idDocente, (err, docente) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener docente' });
    }
    if (!docente) {
      return res.status(404).json({ mensaje: 'Docente no encontrado' });
    }
    res.json(docente);
  });
};

exports.actualizarDocente = (req, res) => {
  const { idDocente } = req.params;
  const datosActualizados = req.body;

  Docente.actualizarDocente(idDocente, datosActualizados, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al actualizar docente' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Docente no encontrado' });
    }
    res.json({ mensaje: 'Docente actualizado con éxito' });
  });
};

exports.eliminarDocente = (req, res) => {
  const { idDocente } = req.params;

  Docente.eliminarDocente(idDocente, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al eliminar docente' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Docente no encontrado' });
    }
    res.json({ mensaje: 'Docente eliminado con éxito' });
  });
};