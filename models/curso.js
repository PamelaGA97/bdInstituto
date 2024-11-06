// models/Curso.js
const db = require('../config/db'); // Asegúrate de que este archivo esté configurado para conectarse a tu base de datos

const Curso = {
  crearCurso: (data, callback) => {
    const query = `
      INSERT INTO curso (idCurso, idMateria, idDocente, idFacultad, idEstudiante, duracion, horario, turno)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
      
    db.query(query, [
      data.idCurso,
      data.idMateria,
      data.idDocente,
      data.idFacultad,
      data.idEstudiante,
      data.duracion,
      data.horario,
      data.turno
    ], (err, results) => {
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
  },

  obtenerCursoPorId: (idCurso, callback) => {
    const query = 'SELECT * FROM curso WHERE idCurso = ?';
    db.query(query, [idCurso], (err, results) => {
      if (err) {
        console.error('Error al obtener curso:', err);
        return callback(err);
      }
      callback(null, results[0]);
    });
  },

  actualizarCurso: (idCurso, data, callback) => {
    const query = `
      UPDATE curso SET 
        idMateria = ?, 
        idDocente = ?, 
        idFacultad = ?, 
        idEstudiante = ?, 
        duracion = ?, 
        horario = ?, 
        turno = ?
      WHERE idCurso = ?`;
      
    db.query(query, [
      data.idMateria,
      data.idDocente,
      data.idFacultad,
      data.idEstudiante,
      data.duracion,
      data.horario,
      data.turno,
      idCurso
    ], (err, results) => {
      if (err) {
        console.error('Error al actualizar curso:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },

  eliminarCurso: (idCurso, callback) => {
    const query = 'DELETE FROM curso WHERE idCurso = ?';
    db.query(query, [idCurso], (err, results) => {
      if (err) {
        console.error('Error al eliminar curso:', err);
        return callback(err);
      }
      callback(null, results);
    });
  }
};

module.exports = Curso;