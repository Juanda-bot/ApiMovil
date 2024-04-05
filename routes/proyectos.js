// routes/proyectos.js

const express = require("express");
const proyectoSchema = require("../models/proyecto");
const router = express.Router();

// Crear proyecto
router.post("/proyectos", async (req, res) => {
    const proyecto = new proyectoSchema(req.body);
    proyecto.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Listar proyectos
router.get("/proyectos", async (req, res) => {
    proyectoSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Tomar un proyecto
router.get("/proyectos/:clientesid", async (req, res) => {
    const { clientesid } = req.params;
    proyectoSchema.find({ clientesid })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


// Eliminar proyecto
router.delete("/proyectos/:id", async (req, res) => {
    const { id } = req.params;
    proyectoSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Actualizar proyecto
router.put("/proyectos/:id", async (req, res) => {
    const { id } = req.params;
    proyectoSchema.updateOne({ _id: id }, { $set: req.body })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
