// routes/estudiantes.js
const express = require('express');
const router = express.Router();
const EstudianteController = require('../controllers/estudianteController');

router.post('/', EstudianteController.crearEstudiante);
router.get('/', EstudianteController.obtenerEstudiantes);

module.exports = router;