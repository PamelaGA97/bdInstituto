// index.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db'); // Asegúrate de que la conexión esté activa
const docenteRoutes = require('./routes/docentes');
const estudianteRoutes = require('./routes/estudiantes');
const materiaRoutes = require('./routes/materias');
const facultadRoutes = require('./routes/facultades');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/docentes', docenteRoutes);
app.use('/api/estudiantes', estudianteRoutes);
app.use('/api/materias', materiaRoutes);
app.use('/api/facultades', facultadRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});