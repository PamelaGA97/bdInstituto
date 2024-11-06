// routes/disponibilidadRoutes.js
const express = require('express');
const router = express.Router();
const DisponibilidadController = require('../controllers/disponibilidadController');

// Rutas para el CRUD de Disponibilidad
router.post('/', DisponibilidadController.crearDisponibilidad); // Crear disponibilidad
router.get('/', DisponibilidadController.obtenerDisponibilidades); // Obtener todas las disponibilidades
router.get('/:idDisponibilidad', DisponibilidadController.obtenerDisponibilidadPorId); // Obtener disponibilidad por ID
router.put('/:idDisponibilidad', DisponibilidadController.actualizarDisponibilidad); // Actualizar disponibilidad
router.delete('/:idDisponibilidad', DisponibilidadController.eliminarDisponibilidad); // Eliminar disponibilidad

module.exports = router;