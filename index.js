// index.js
const express = require('express');
const bodyParser = require('body-parser');
const docenteRoutes = require('./routes/docentes');
const estudianteRoutes = require('./routes/estudiantes');
const materiaRoutes = require('./routes/materias');
const facultadRoutes = require('./routes/facultades');
const cursoRoutes = require('./routes/cursos');
const secretariaRoutes = require('./routes/secretarias');
const carreraRoutes = require('./routes/carreras');
const inscripcionRoutes = require('./routes/inscripciones');
const disponibilidadRoutes = require('./routes/disponibilidadRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/docentes', docenteRoutes);
app.use('/api/estudiantes', estudianteRoutes);
app.use('/api/materias', materiaRoutes);
app.use('/api/facultades', facultadRoutes);
app.use('/api/cursos', cursoRoutes);
app.use('/api/secretarias', secretariaRoutes);
app.use('/api/carreras', carreraRoutes); 
app.use('/api/inscripciones', inscripcionRoutes);
app.use('/api/disponibilidades', disponibilidadRoutes);
app.use('/api/usuarios', usuarioRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});