// routes/estudiantes.js
const express = require('express');
const router = express.Router();
const EstudianteController = require('../controllers/estudianteController');

router.post('/', EstudianteController.crearEstudiante);
router.get('/', EstudianteController.obtenerEstudiantes);
router.get('/:idEstudiante', EstudianteController.obtenerEstudiantePorId);
router.get('/:ciEstudiante', EstudianteController.obtenerEstudiantePorCi);
router.put('/:idEstudiante', EstudianteController.actualizarEstudiante);
router.delete('/:idEstudiante', EstudianteController.eliminarEstudiante);

module.exports = router;