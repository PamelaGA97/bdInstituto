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

exports.obtenerFacultadPorId = (req, res) => {
  const { idFacultad } = req.params;
  
  Facultad.obtenerFacultadPorId(idFacultad, (err, facultad) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener facultad' });
    }
    if (!facultad) {
      return res.status(404).json({ mensaje: 'Facultad no encontrada' });
    }
    res.json(facultad);
  });
};

exports.actualizarFacultad = (req, res) => {
  const { idFacultad } = req.params;
  const datosActualizados = req.body;

  Facultad.actualizarFacultad(idFacultad, datosActualizados, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al actualizar facultad' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Facultad no encontrada' });
    }
    res.json({ mensaje: 'Facultad actualizada con éxito' });
  });
};

exports.eliminarFacultad = (req, res) => {
  const { idFacultad } = req.params;

  Facultad.eliminarFacultad(idFacultad, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al eliminar facultad' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Facultad no encontrada' });
    }
    res.json({ mensaje: 'Facultad eliminada con éxito' });
  });
};