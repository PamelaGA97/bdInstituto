// controllers/UsuarioController.js
const Usuario = require('../models/usuario');

exports.crearUsuario = (req, res) => {
  const nuevoUsuario = req.body;
  
  Usuario.crearUsuario(nuevoUsuario, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al crear usuario' });
    }
    res.status(201).json({ mensaje: 'Usuario creado con éxito', id: results.insertId });
  });
};

exports.obtenerUsuarios = (req, res) => {
  Usuario.obtenerUsuarios((err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener usuarios' });
    }
    res.json(results);
  });
};

exports.obtenerUsuarioPorId = (req, res) => {
  const { idUsuario } = req.params;
  
  Usuario.obtenerUsuarioPorId(idUsuario, (err, usuario) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener usuario' });
    }
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json(usuario);
  });
};

exports.actualizarUsuario = (req, res) => {
    const { idUsuario } = req.params;
    const datosActualizados = req.body;
  
    Usuario.actualizarUsuario(idUsuario, datosActualizados, (err, results) => {
      if (err) {
        return res.status(500).json({ mensaje: 'Error al actualizar usuario' });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
      res.json({ mensaje: 'Usuario actualizado con éxito' });
    });
  };
  
  exports.eliminarUsuario = (req, res) => {
    const { idUsuario } = req.params;
  
    Usuario.eliminarUsuario(idUsuario, (err, results) => {
      if (err) {
        return res.status(500).json({ mensaje: 'Error al eliminar usuario' });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
      res.json({ mensaje: 'Usuario eliminado con éxito' });
    });
  };