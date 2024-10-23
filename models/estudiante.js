// models/Estudiante.js
const db = require('../config/db');

const Estudiante = {
  crearEstudiante: (data, callback) => {
    const query = 'INSERT INTO estudiante (idEstudiante, nombreEstudiante, apellidoPaternoEstudiante, apellidoMaternoEstudiante ciEstudiante, celularEstudiante, anhoPromocion, colegio, carreraInteres) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [data.idEstudiante, data.nombreEstudiante, data.apellidoPaternoEstudiante, data.apellidoMaternoEstudiante, data.ciEstudiante, data.celularEstudiante, data.anhoPromocion, data.colegio, data.carreraInteres], (err, results) => {
      if (err) {
        console.error('Error al crear estudiante:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },
  
  obtenerEstudiantes: (callback) => {
    const query = 'SELECT * FROM estudiante';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener estudiantes:', err);
        return callback(err);
      }
      callback(null, results);
    });
  }
};

module.exports = Estudiante;