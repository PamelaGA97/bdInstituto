// routes/facultadRoutes.js
const express = require('express');
const router = express.Router();
const FacultadController = require('../controllers/facultadController');

// Rutas para el CRUD de Facultad
router.post('/', FacultadController.crearFacultad); // Crear facultad
router.get('/', FacultadController.obtenerFacultades); // Obtener todas las facultades
router.get('/:idFacultad', FacultadController.obtenerFacultadPorId); // Obtener facultad por ID
router.put('/:idFacultad', FacultadController.actualizarFacultad); // Actualizar facultad
router.delete('/:idFacultad', FacultadController.eliminarFacultad); // Eliminar facultad

module.exports = router;