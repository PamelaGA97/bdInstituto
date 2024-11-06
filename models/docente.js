// models/Docente.js
const db = require('../config/db'); // Asegúrate de que este archivo esté configurado para conectarse a tu base de datos

const Docente = {
  crearDocente: (data, callback) => {
    const query = `
      INSERT INTO docente (idDocente, nombreDocente, apellidoPaternoDocente, apellidoMaternoDocente, ciDocente, celularDocente, carreraEgreso, materiaDictar)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
      
    db.query(query, [
      data.idDocente,
      data.nombreDocente,
      data.apellidoPaternoDocente,
      data.apellidoMaternoDocente,
      data.ciDocente,
      data.celularDocente,
      data.carreraEgreso,
      data.materiaDictar
    ], (err, results) => {
      if (err) {
        console.error('Error al crear docente:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },
  
  obtenerDocentes: (callback) => {
    const query = 'SELECT * FROM docente';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener docentes:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },

  obtenerDocentePorId: (idDocente, callback) => {
    const query = 'SELECT * FROM docente WHERE idDocente = ?';
    db.query(query, [idDocente], (err, results) => {
      if (err) {
        console.error('Error al obtener docente:', err);
        return callback(err);
      }
      callback(null, results[0]);
    });
  },

  actualizarDocente: (idDocente, data, callback) => {
    const query = `
      UPDATE docente SET 
        nombreDocente = ?, 
        apellidoPaternoDocente = ?, 
        apellidoMaternoDocente = ?, 
        ciDocente = ?, 
        celularDocente = ?, 
        carreraEgreso = ?, 
        materiaDictar = ?
      WHERE idDocente = ?`;
      
    db.query(query, [
      data.nombreDocente,
      data.apellidoPaternoDocente,
      data.apellidoMaternoDocente,
      data.ciDocente,
      data.celularDocente,
      data.carreraEgreso,
      data.materiaDictar,
      idDocente
    ], (err, results) => {
      if (err) {
        console.error('Error al actualizar docente:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },

  eliminarDocente: (idDocente, callback) => {
    const query = 'DELETE FROM docente WHERE idDocente = ?';
    db.query(query, [idDocente], (err, results) => {
      if (err) {
        console.error('Error al eliminar docente:', err);
        return callback(err);
      }
      callback(null, results);
    });
  }
};

module.exports = Docente;