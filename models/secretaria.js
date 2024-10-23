// models/Secretaria.js
const db = require('../config/db');

const Secretaria = {
  crearSecretaria: (data, callback) => {
    const query = `
      INSERT INTO secretaria (idSecretaria, nombre, telefono, turno, bloque)
      VALUES (?, ?, ?, ?, ?)`;
      
    db.query(query, [data.idSecretaria, data.nombre, data.telefono, data.turno, data.bloque], (err, results) => {
      if (err) {
        console.error('Error al crear secretaria:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },
  
  obtenerSecretarias: (callback) => {
    const query = 'SELECT * FROM secretaria';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener secretarias:', err);
        return callback(err);
      }
      callback(null, results);
    });
  }
};

module.exports = Secretaria;