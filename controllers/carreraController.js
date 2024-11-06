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

exports.obtenerCarreraPorId = (req, res) => {
  const { idCarrera } = req.params;
  
  Carrera.obtenerCarreraPorId(idCarrera, (err, carrera) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener carrera' });
    }
    if (!carrera) {
      return res.status(404).json({ mensaje: 'Carrera no encontrada' });
    }
    res.json(carrera);
  });
};

exports.actualizarCarrera = (req, res) => {
  const { idCarrera } = req.params;
  const datosActualizados = req.body;

  Carrera.actualizarCarrera(idCarrera, datosActualizados, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al actualizar carrera' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Carrera no encontrada' });
    }
    res.json({ mensaje: 'Carrera actualizada con éxito' });
  });
};

exports.eliminarCarrera = (req, res) => {
    const { idCarrera } = req.params;
  
    Carrera.eliminarCarrera(idCarrera, (err, results) => {
      if (err) {
        return res.status(500).json({ mensaje: 'Error al eliminar carrera' });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ mensaje: 'Carrera no encontrada' });
      }
      res.json({ mensaje: 'Carrera eliminada con éxito' });
    });
  };