// config/db.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Cambia si tienes otro usuario
  password: '', // Cambia si tienes una contraseña
  database: 'bdinstituto' // Cambia por el nombre de tu base de datos
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});

module.exports = db;