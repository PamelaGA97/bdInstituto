// controllers/SecretariaController.js
const Secretaria = require('../models/secretaria');

exports.crearSecretaria = (req, res) => {
  const nuevaSecretaria = req.body;
  
  Secretaria.crearSecretaria(nuevaSecretaria, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al crear secretaria' });
    }
    res.status(201).json({ mensaje: 'Secretaria creada con éxito', id: results.insertId });
  });
};

exports.obtenerSecretarias = (req, res) => {
  Secretaria.obtenerSecretarias((err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener secretarias' });
    }
    res.json(results);
  });
};

exports.obtenerSecretariaPorId = (req, res) => {
  const { idSecretaria } = req.params;
  
  Secretaria.obtenerSecretariaPorId(idSecretaria, (err, secretaria) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener secretaria' });
    }
    if (!secretaria) {
      return res.status(404).json({ mensaje: 'Secretaria no encontrada' });
    }
    res.json(secretaria);
  });
};

exports.actualizarSecretaria = (req, res) => {
  const { idSecretaria } = req.params;
  const datosActualizados = req.body;

  Secretaria.actualizarSecretaria(idSecretaria, datosActualizados, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al actualizar secretaria' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Secretaria no encontrada' });
    }
    res.json({ mensaje: 'Secretaria actualizada con éxito' });
  });
};

exports.eliminarSecretaria = (req, res) => {
  const { idSecretaria } = req.params;

  Secretaria.eliminarSecretaria(idSecretaria, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al eliminar secretaria' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Secretaria no encontrada' });
    }
    res.json({ mensaje: 'Secretaria eliminada con éxito' });
  });
};