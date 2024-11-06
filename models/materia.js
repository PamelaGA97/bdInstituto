// models/Materia.js
const db = require('../config/db'); // Asegúrate de que este archivo esté configurado para conectarse a tu base de datos

const Materia = {
  crearMateria: (data, callback) => {
    const query = `
      INSERT INTO materia (idMateria, nombreMateria)
      VALUES (?, ?)`;
      
    db.query(query, [data.idMateria, data.nombreMateria], (err, results) => {
      if (err) {
        console.error('Error al crear materia:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },
  
  obtenerMaterias: (callback) => {
    const query = 'SELECT * FROM materia';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener materias:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },

  obtenerMateriaPorId: (idMateria, callback) => {
    const query = 'SELECT * FROM materia WHERE idMateria = ?';
    db.query(query, [idMateria], (err, results) => {
      if (err) {
        console.error('Error al obtener materia:', err);
        return callback(err);
      }
      callback(null, results[0]);
    });
  },

  actualizarMateria: (idMateria, data, callback) => {
    const query = `
      UPDATE materia SET 
        nombreMateria = ?
      WHERE idMateria = ?`;
      
    db.query(query, [data.nombreMateria, idMateria], (err, results) => {
      if (err) {
        console.error('Error al actualizar materia:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },

  eliminarMateria: (idMateria, callback) => {
    const query = 'DELETE FROM materia WHERE idMateria = ?';
    db.query(query, [idMateria], (err, results) => {
      if (err) {
        console.error('Error al eliminar materia:', err);
        return callback(err);
      }
      callback(null, results);
    });
  }
};

module.exports = Materia;