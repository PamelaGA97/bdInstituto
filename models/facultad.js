// models/Facultad.js
const db = require('../config/db'); // Asegúrate de que este archivo esté configurado para conectarse a tu base de datos

const Facultad = {
  crearFacultad: (data, callback) => {
    const query = `
      INSERT INTO facultad (idFacultad, nombreFacultad, modalidadIngreso, idCarrera)
      VALUES (?, ?, ?, ?)`;
      
    db.query(query, [
      data.idFacultad,
      data.nombreFacultad,
      data.modalidadIngreso,
      data.idCarrera
    ], (err, results) => {
      if (err) {
        console.error('Error al crear facultad:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },
  
  obtenerFacultades: (callback) => {
    const query = 'SELECT * FROM facultad';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener facultades:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },

  obtenerFacultadPorId: (idFacultad, callback) => {
    const query = 'SELECT * FROM facultad WHERE idFacultad = ?';
    db.query(query, [idFacultad], (err, results) => {
      if (err) {
        console.error('Error al obtener facultad:', err);
        return callback(err);
      }
      callback(null, results[0]);
    });
  },

  actualizarFacultad: (idFacultad, data, callback) => {
    const query = `
      UPDATE facultad SET 
        nombreFacultad = ?, 
        modalidadIngreso = ?, 
        idCarrera = ?
      WHERE idFacultad = ?`;
      
    db.query(query, [
      data.nombreFacultad,
      data.modalidadIngreso,
      data.idCarrera,
      idFacultad
    ], (err, results) => {
      if (err) {
        console.error('Error al actualizar facultad:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },

  eliminarFacultad: (idFacultad, callback) => {
    const query = 'DELETE FROM facultad WHERE idFacultad = ?';
    db.query(query, [idFacultad], (err, results) => {
      if (err) {
        console.error('Error al eliminar facultad:', err);
        return callback(err);
      }
      callback(null, results);
    });
  }
};

module.exports = Facultad;