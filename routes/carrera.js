// routes/carreras.js
const express = require('express');
const router = express.Router();
const CarreraController = require('../controllers/carreraController');

router.post('/', CarreraController.crearCarrera);
router.get('/', CarreraController.obtenerCarreras);

module.exports = router;