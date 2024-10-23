// routes/inscripciones.js
const express = require('express');
const router = express.Router();
const InscripcionController = require('../controllers/inscripcionController');

router.post('/', InscripcionController.crearInscripcion);
router.get('/', InscripcionController.obtenerInscripciones);

module.exports = router;