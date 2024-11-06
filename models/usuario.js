// models/Usuario.js
const db = require('../config/db'); // Asegúrate de que este archivo esté configurado para conectarse a tu base de datos

const Usuario = {
  crearUsuario: (data, callback) => {
    const query = `
      INSERT INTO usuario (idUsuario, idInscripcion, idCurso, idSecretaria)
      VALUES (?, ?, ?, ?)`;
      
    db.query(query, [
      data.idUsuario,
      data.idInscripcion,
      data.idCurso,
      data.idSecretaria
    ], (err, results) => {
      if (err) {
        console.error('Error al crear usuario:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },
  
  obtenerUsuarios: (callback) => {
    const query = 'SELECT * FROM usuario';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener usuarios:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },

  obtenerUsuarioPorId: (idUsuario, callback) => {
    const query = 'SELECT * FROM usuario WHERE idUsuario = ?';
    db.query(query, [idUsuario], (err, results) => {
      if (err) {
        console.error('Error al obtener usuario:', err);
        return callback(err);
      }
      callback(null, results[0]);
    });
  },

  actualizarUsuario: (idUsuario, data, callback) => {
    const query = `
      UPDATE usuario SET 
        idInscripcion = ?, 
        idCurso = ?, 
        idSecretaria = ?
      WHERE idUsuario = ?`;
      
    db.query(query, [
      data.idInscripcion,
      data.idCurso,
      data.idSecretaria,
      idUsuario
    ], (err, results) => {
      if (err) {
        console.error('Error al actualizar usuario:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },

  eliminarUsuario: (idUsuario, callback) => {
    const query = 'DELETE FROM usuario WHERE idUsuario = ?';
    db.query(query, [idUsuario], (err, results) => {
      if (err) {
        console.error('Error al eliminar usuario:', err);
        return callback(err);
      }
      callback(null, results);
    });
  }
};

module.exports = Usuario;