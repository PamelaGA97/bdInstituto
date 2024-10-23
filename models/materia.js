// models/Materia.js
const db = require('../config/db');

const Materia = {
  crearMateria: (data, callback) => {
    const query = 'INSERT INTO materia (idMateria, nombreMateria) VALUES (?, ?)';
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
  }
};

module.exports = Materia;