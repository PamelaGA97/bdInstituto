// routes/materias.js
const express = require('express');
const router = express.Router();
const MateriaController = require('../controllers/materiaController');

router.post('/', MateriaController.crearMateria);
router.get('/', MateriaController.obtenerMaterias);

module.exports = router;