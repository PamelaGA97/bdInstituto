// routes/cursos.js
const express = require('express');
const router = express.Router();
const CursoController = require('../controllers/cursoController');

router.post('/', CursoController.crearCurso);
router.get('/', CursoController.obtenerCursos);

module.exports = router;