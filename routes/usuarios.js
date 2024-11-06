// routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');

// Rutas para el CRUD de Usuario
router.post('/', UsuarioController.crearUsuario); // Crear usuario
router.get('/', UsuarioController.obtenerUsuarios); // Obtener todos los usuarios
router.get('/:idUsuario', UsuarioController.obtenerUsuarioPorId); // Obtener usuario por ID
router.put('/:idUsuario', UsuarioController.actualizarUsuario); // Actualizar usuario
router.delete('/:idUsuario', UsuarioController.eliminarUsuario); // Eliminar usuario

module.exports = router;