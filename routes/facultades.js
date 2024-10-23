// routes/facultades.js
const express = require('express');
const router = express.Router();
const FacultadController = require('../controllers/facultadController');

router.post('/', FacultadController.crearFacultad);
router.get('/', FacultadController.obtenerFacultades);

module.exports = router;