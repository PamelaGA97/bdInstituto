// controllers/CursoController.js
const Curso = require('../models/curso');

exports.crearCurso = (req, res) => {
  const nuevoCurso = req.body;
  
  Curso.crearCurso(nuevoCurso, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al crear curso' });
    }
    res.status(201).json({ mensaje: 'Curso creado con éxito', id: results.insertId });
  });
};

exports.obtenerCursos = (req, res) => {
  Curso.obtenerCursos((err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener cursos' });
    }
    res.json(results);
  });
};

exports.obtenerCursoPorId = (req, res) => {
  const { idCurso } = req.params;
  
  Curso.obtenerCursoPorId(idCurso, (err, curso) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al obtener curso' });
    }
    if (!curso) {
      return res.status(404).json({ mensaje: 'Curso no encontrado' });
    }
    res.json(curso);
  });
};

exports.actualizarCurso = (req, res) => {
  const { idCurso } = req.params;
  const datosActualizados = req.body;

  Curso.actualizarCurso(idCurso, datosActualizados, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al actualizar curso' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Curso no encontrado' });
    }
    res.json({ mensaje: 'Curso actualizado con éxito' });
  });
};

exports.eliminarCurso = (req, res) => {
  const { idCurso } = req.params;

  Curso.eliminarCurso(idCurso, (err, results) => {
    if (err) {
      return res.status(500).json({ mensaje: 'Error al eliminar curso' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'Curso no encontrado' });
    }
    res.json({ mensaje: 'Curso eliminado con éxito' });
  });
};