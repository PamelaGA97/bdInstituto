// models/Carrera.js
const db = require('../config/db');

const Carrera = {
  crearCarrera: (data, callback) => {
    const query = `
      INSERT INTO carrera (idCarrera, nombreCarrera, modalidadIngreso)
      VALUES (?, ?, ?)`;
      
    db.query(query, [data.idCarrera, data.nombreCarrera, data.modalidadIngreso], (err, results) => {
      if (err) {
        console.error('Error al crear carrera:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },
  
  obtenerCarreras: (callback) => {
    const query = 'SELECT * FROM carrera';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener carreras:', err);
        return callback(err);
      }
      callback(null, results);
    });
  }
};

module.exports = Carrera;