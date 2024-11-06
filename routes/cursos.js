// routes/cursoRoutes.js
const express = require('express');
const router = express.Router();
const CursoController = require('../controllers/cursoController');

// Rutas para el CRUD de Curso
router.post('/', CursoController.crearCurso); // Crear curso
router.get('/', CursoController.obtenerCursos); // Obtener todos los cursos
router.get('/:idCurso', CursoController.obtenerCursoPorId); // Obtener curso por ID
router.put('/:idCurso', CursoController.actualizarCurso); // Actualizar curso
router.delete('/:idCurso', CursoController.eliminarCurso); // Eliminar curso

module.exports = router;