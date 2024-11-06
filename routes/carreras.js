// routes/carrera.js
const express = require('express');
const router = express.Router();
const CarreraController = require('../controllers/carreraController');

// Crear una nueva carrera
router.post('/', CarreraController.crearCarrera);

// Obtener todas las carreras
router.get('/', CarreraController.obtenerCarreras);

// Obtener una carrera por ID
router.get('/:idCarrera', CarreraController.obtenerCarreraPorId);

// Actualizar una carrera por ID
router.put('/:idCarrera', CarreraController.actualizarCarrera);

// Eliminar una carrera por ID
router.delete('/:idCarrera', CarreraController.eliminarCarrera);

module.exports = router;