// routes/secretariaRoutes.js
const express = require('express');
const router = express.Router();
const SecretariaController = require('../controllers/secretariaController');

// Rutas para el CRUD de Secretaria
router.post('/', SecretariaController.crearSecretaria); // Crear secretaria
router.get('/', SecretariaController.obtenerSecretarias); // Obtener todas las secretarias
router.get('/:idSecretaria', SecretariaController.obtenerSecretariaPorId); // Obtener secretaria por ID
router.put('/:idSecretaria', SecretariaController.actualizarSecretaria); // Actualizar secretaria
router.delete('/:idSecretaria', SecretariaController.eliminarSecretaria); // Eliminar secretaria

module.exports = router;