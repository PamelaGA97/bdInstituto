// routes/docenteRoutes.js
const express = require('express');
const router = express.Router();
const DocenteController = require('../controllers/docenteController');

// Rutas para el CRUD de Docente
router.post('/', DocenteController.crearDocente); // Crear docente
router.get('/', DocenteController.obtenerDocentes); // Obtener todos los docentes
router.get('/:idDocente', DocenteController.obtenerDocentePorId); // Obtener docente por ID
router.put('/:idDocente', DocenteController.actualizarDocente); // Actualizar docente
router.delete('/:idDocente', DocenteController.eliminarDocente); // Eliminar docente

module.exports = router;