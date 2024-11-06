// models/Carrera.js
const db = require('../config/db');

const Carrera = {
  crearCarrera: (data, callback) => {
    const query = `
      INSERT INTO carreras (idCarrera, nombreCarrera, modalidadIngreso)
      VALUES (?, ?, ?)`;
      
    db.query(query, [
      data.idCarrera,
      data.nombreCarrera,
      data.modalidadIngreso
    ], (err, results) => {
      if (err) {
        console.error('Error al crear carrera:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },
  
  obtenerCarreras: (callback) => {
    const query = 'SELECT * FROM carreras';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener carreras:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },

  obtenerCarreraPorId: (idCarrera, callback) => {
    const query = 'SELECT * FROM carreras WHERE idCarrera = ?';
    db.query(query, [idCarrera], (err, results) => {
      if (err) {
        console.error('Error al obtener carrera:', err);
        return callback(err);
      }
      callback(null, results[0]);
    });
  },

  actualizarCarrera: (idCarrera, data, callback) => {
    const query = `
      UPDATE carreras SET 
        nombreCarrera = ?, 
        modalidadIngreso = ?
      WHERE idCarrera = ?`;
      
    db.query(query, [
      data.nombreCarrera,
      data.modalidadIngreso,
      idCarrera
    ], (err, results) => {
      if (err) {
        console.error('Error al actualizar carrera:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },

  eliminarCarrera: (idCarrera, callback) => {
    const query = 'DELETE FROM carreras WHERE idCarrera = ?';
    db.query(query, [idCarrera], (err, results) => {
      if (err) {
        console.error('Error al eliminar carrera:', err);
        return callback(err);
      }
      callback(null, results);
    });
  }
};

module.exports = Carrera;