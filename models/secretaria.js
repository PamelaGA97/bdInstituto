// models/Secretaria.js
const db = require('../config/db'); // Asegúrate de que este archivo esté configurado para conectarse a tu base de datos

const Secretaria = {
  crearSecretaria: (data, callback) => {
    const query = `
      INSERT INTO secretaria (idSecretaria, nombre, telefono, turno, bloque)
      VALUES (?, ?, ?, ?, ?)`;
      
    db.query(query, [
      data.idSecretaria,
      data.nombre,
      data.telefono,
      data.turno,
      data.bloque
    ], (err, results) => {
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
  },

  obtenerSecretariaPorId: (idSecretaria, callback) => {
    const query = 'SELECT * FROM secretaria WHERE idSecretaria = ?';
    db.query(query, [idSecretaria], (err, results) => {
      if (err) {
        console.error('Error al obtener secretaria:', err);
        return callback(err);
      }
      callback(null, results[0]);
    });
  },

  actualizarSecretaria: (idSecretaria, data, callback) => {
    const query = `
      UPDATE secretaria SET 
        nombre = ?, 
        telefono = ?, 
        turno = ?, 
        bloque = ?
      WHERE idSecretaria = ?`;
      
    db.query(query, [
      data.nombre,
      data.telefono,
      data.turno,
      data.bloque,
      idSecretaria
    ], (err, results) => {
      if (err) {
        console.error('Error al actualizar secretaria:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },

  eliminarSecretaria: (idSecretaria, callback) => {
    const query = 'DELETE FROM secretaria WHERE idSecretaria = ?';
    db.query(query, [idSecretaria], (err, results) => {
      if (err) {
        console.error('Error al eliminar secretaria:', err);
        return callback(err);
      }
      callback(null, results);
    });
  }
};

module.exports = Secretaria;