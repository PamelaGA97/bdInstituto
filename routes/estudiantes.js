// routes/estudianteRoutes.js
const express = require('express');
const router = express.Router();
const EstudianteController = require('../controllers/EstudianteController');

// Rutas para el CRUD de Estudiante
router.post('/', EstudianteController.crearEstudiante); // Crear estudiante
router.get('/', EstudianteController.obtenerEstudiantes); // Obtener todos los estudiantes
router.get('/:idEstudiante', EstudianteController.obtenerEstudiantePorId); // Obtener estudiante por ID
router.put('/:idEstudiante', EstudianteController.actualizarEstudiante); // Actualizar estudiante
router.delete('/:idEstudiante', EstudianteController.eliminarEstudiante); // Eliminar estudiante

module.exports = router;