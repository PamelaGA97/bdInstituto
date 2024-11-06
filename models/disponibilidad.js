// models/Disponibilidad.js
const db = require('../config/db'); // Asegúrate de que este archivo esté configurado para conectarse a tu base de datos

const Disponibilidad = {
  crearDisponibilidad: (data, callback) => {
    const query = `
      INSERT INTO disponibilidad (idDisponibilidad, horario, idDocente)
      VALUES (?, ?, ?)`;
      
    db.query(query, [
      data.idDisponibilidad,
      data.horario,
      data.idDocente
    ], (err, results) => {
      if (err) {
        console.error('Error al crear disponibilidad:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },
  
  obtenerDisponibilidades: (callback) => {
    const query = 'SELECT * FROM disponibilidad';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener disponibilidades:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },

  obtenerDisponibilidadPorId: (idDisponibilidad, callback) => {
    const query = 'SELECT * FROM disponibilidad WHERE idDisponibilidad = ?';
    db.query(query, [idDisponibilidad], (err, results) => {
      if (err) {
        console.error('Error al obtener disponibilidad:', err);
        return callback(err);
      }
      callback(null, results[0]);
    });
  },

  actualizarDisponibilidad: (idDisponibilidad, data, callback) => {
    const query = `
      UPDATE disponibilidad SET 
        horario = ?, 
        idDocente = ?
      WHERE idDisponibilidad = ?`;
      
    db.query(query, [
      data.horario,
      data.idDocente,
      idDisponibilidad
    ], (err, results) => {
      if (err) {
        console.error('Error al actualizar disponibilidad:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },

  eliminarDisponibilidad: (idDisponibilidad, callback) => {
    const query = 'DELETE FROM disponibilidad WHERE idDisponibilidad = ?';
    db.query(query, [idDisponibilidad], (err, results) => {
      if (err) {
        console.error('Error al eliminar disponibilidad:', err);
        return callback(err);
      }
      callback(null, results);
    });
  }
};

module.exports = Disponibilidad;