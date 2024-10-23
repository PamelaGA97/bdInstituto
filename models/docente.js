// models/Docente.js
const db = require('../config/db');

const Docente = {
  crearDocente: (data, callback) => {
    const query = 'INSERT INTO docente (idDocente, nombreDocente, apellidoPaternoDocente, apellidoMaternoDocente ciDocente, celularDocente, carreraEgreso, materiaDictar) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [data.idDocente, data.nombreDocente, data.apellidoPaternoDocente, data.apellidoMaternoDocente, data.ciDocente, data.celularDocente, data.carreraEgreso, data.materiaDictar], (err, results) => {
      if (err) {
        console.error('Error al crear docente:', err);
        return callback(err);
      }
      callback(null, results);
    });
  },
  
  obtenerDocentes: (callback) => {
    const query = 'SELECT * FROM docente';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener docentes:', err);
        return callback(err);
      }
      callback(null, results);
    });
  }
};

module.exports = Docente;