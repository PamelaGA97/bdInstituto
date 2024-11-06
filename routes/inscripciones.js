// routes/inscripcionRoutes.js
const express = require('express');
const router = express.Router();
const InscripcionController = require('../controllers/inscripcionController');

// Rutas para el CRUD de Inscripción
router.post('/', InscripcionController.crearInscripcion); // Crear inscripción
router.get('/', InscripcionController.obtenerInscripciones); // Obtener todas las inscripciones
router.get('/:idInscripcion', InscripcionController.obtenerInscripcionPorId); // Obtener inscripción por ID
router.put('/:idInscripcion', InscripcionController.actualizarInscripcion); // Actualizar inscripción
router.delete('/:idInscripcion', InscripcionController.eliminarInscripcion); // Eliminar inscripción

module.exports = router;