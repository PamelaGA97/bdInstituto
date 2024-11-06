// routes/materiaRoutes.js
const express = require('express');
const router = express.Router();
const MateriaController = require('../controllers/MateriaController');

// Rutas para el CRUD de Materia
router.post('/', MateriaController.crearMateria); // Crear materia
router.get('/', MateriaController.obtenerMaterias); // Obtener todas las materias
router.get('/:idMateria', MateriaController.obtenerMateriaPorId); // Obtener materia por ID
router.put('/:idMateria', MateriaController.actualizarMateria); // Actualizar materia
router.delete('/:idMateria', MateriaController.eliminarMateria); // Eliminar materia

module.exports = router;