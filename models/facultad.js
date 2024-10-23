// models/Facultad.js
const db = require('../config/db');

const Facultad = {
  crearFacultad: (data, callback) => {
    const query = 'INSERT INTO facultad (idFacultad, nombreFacultad, idCarrera) VALUES (?, ?, ?)';
    db.query(query, [data.idFacultad, data.nombreFacultad, data.idCarrera], (err, results) => {
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
  }
};

module.exports = Facultad;