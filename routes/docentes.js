// routes/docentes.js
const express = require('express');
const router = express.Router();
const DocenteController = require('../controllers/docenteController');

router.post('/', DocenteController.crearDocente);
router.get('/', DocenteController.obtenerDocentes);

module.exports = router;