// controllers/DisponibilidadController.js
const Disponibilidad = require('../models/disponibilidad');

exports.crearDisponibilidad = (req, res) => {
  const nuevaDisponibilidad = req.body;
  
  Disponibilidad.crearDisponibilidad(nuevaDisponibilidad, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al crear disponibilidad' });
    }
    res.status(201).json({ mensaje: 'Disponibilidad creada con éxito', id: results.insertId });
  });
};

exports.obtenerDisponibilidades = (req, res) => {
  Disponibilidad.obtenerDisponibilidades((err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener disponibilidades' });
    }
    res.json(results);
  });
};

exports.obtenerDisponibilidadPorId = (req, res) => {
  const { idDisponibilidad } = req.params;
  
  Disponibilidad.obtenerDisponibilidadPorId(idDisponibilidad, (err, disponibilidad) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener disponibilidad' });
    }
    if (!disponibilidad) {
      return res.status(404).json({ mensaje: 'Disponibilidad no encontrada' });
    }
    res.json(disponibilidad);
  });
};

exports.actualizarDisponibilidad = (req, res) => {
  const { idDisponibilidad } = req.params;
  const datosActualizados = req.body;

  Disponibilidad.actualizarDisponibilidad(idDisponibilidad, datosActualizados, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al actualizar disponibilidad' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Disponibilidad no encontrada' });
    }
    res.json({ mensaje: 'Disponibilidad actualizada con éxito' });
  });
};

exports.eliminarDisponibilidad = (req, res) => {
  const { idDisponibilidad } = req.params;

  Disponibilidad.eliminarDisponibilidad(idDisponibilidad, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al eliminar disponibilidad' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Disponibilidad no encontrada' });
    }
    res.json({ mensaje: 'Disponibilidad eliminada con éxito' });
  });
};