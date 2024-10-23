// models/Curso.js
const db = require('../config/db');

const Curso = {
  crearCurso: (data, callback) => {
    const query = `
      INSERT INTO curso (idCurso, idMateria, idDocente, idFacultad, idEstudiante, duracion, horario, turno)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
      
    db.query(query, [data.idCurso, data.idMateria, data.idDocente, data.idFacultad, data.idEstudiante, data.duracion, data.horario, data.turno], (err, results) => {
      if (err) {
        console.error('Error al crear curso:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },
  
  obtenerCursos: (callback) => {
    const query = 'SELECT * FROM curso';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener cursos:', err);
        return callback(err);
      }
      callback(null, results);
    });
  }
};

module.exports = Curso;