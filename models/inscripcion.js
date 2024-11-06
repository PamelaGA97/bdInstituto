// models/Inscripcion.js
const db = require('../config/db'); // Asegúrate de que este archivo esté configurado para conectarse a tu base de datos

const Inscripcion = {
  crearInscripcion: (data, callback) => {
    const query = `
      INSERT INTO inscripcion (idInscripcion, idEstudiante, fechaInscripcion, fechaNacimiento, zona, tipoColegio, medio, grupo, mensualidad, descuento, mensualidadConDescuento, responsable)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      
    db.query(query, [
      data.idInscripcion,
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
  },

  obtenerInscripcionPorId: (idInscripcion, callback) => {
    const query = 'SELECT * FROM inscripcion WHERE idInscripcion = ?';
    db.query(query, [idInscripcion], (err, results) => {
      if (err) {
        console.error('Error al obtener inscripción:', err);
        return callback(err);
      }
      callback(null, results[0]);
    });
  },

  actualizarInscripcion: (idInscripcion, data, callback) => {
    const query = `
      UPDATE inscripcion SET 
        idEstudiante = ?, 
        fechaInscripcion = ?, 
        fechaNacimiento = ?, 
        zona = ?, 
        tipoColegio = ?, 
        medio = ?, 
        grupo = ?, 
        mensualidad = ?, 
        descuento = ?, 
        mensualidadConDescuento = ?, 
        responsable = ?
      WHERE idInscripcion = ?`;
      
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
      data.responsable,
      idInscripcion
    ], (err, results) => {
      if (err) {
        console.error('Error al actualizar inscripción:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },

  eliminarInscripcion: (idInscripcion, callback) => {
    const query = 'DELETE FROM inscripcion WHERE idInscripcion = ?';
    db.query(query, [idInscripcion], (err, results) => {
      if (err) {
        console.error('Error al eliminar inscripción:', err);
        return callback(err);
      }
      callback(null, results);
    });
  }
};

module.exports = Inscripcion;