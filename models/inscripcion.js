// models/Inscripcion.js
const db = require('../config/db');

const Inscripcion = {
  crearInscripcion: (data, callback) => {
    const query = `
      INSERT INTO inscripcion (idEstudiante, fechaInscripcion, fechaNacimiento, zona, tipoColegio, medio, grupo, mensualidad, descuento, mensualidadConDescuento, responsable)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      
    db.query(query, [
      data.idEstudiante,
      data.fechaInscripcion,
      data.fechaNacimiento,
      data.zona,
      data.tipoColegio,
      data.medio,
      data.grupo,
      data.mensualidad,
      data.descuento,
      data.mensualidadConDescuento,
      data.responsable
    ], (err, results) => {
      if (err) {
        console.error('Error al crear inscripción:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },
  
  obtenerInscripciones: (callback) => {
    const query = 'SELECT * FROM inscripcion';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener inscripciones:', err);
        return callback(err);
      }
      callback(null, results);
    });
  }
};

module.exports = Inscripcion;