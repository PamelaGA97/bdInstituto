// routes/secretarias.js
const express = require('express');
const router = express.Router();
const SecretariaController = require('../controllers/secretariaController');

router.post('/', SecretariaController.crearSecretaria);
router.get('/', SecretariaController.obtenerSecretarias);

module.exports = router;