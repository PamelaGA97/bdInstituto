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