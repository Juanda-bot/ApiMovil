const express = require("express");
const actividadSchema = require("../models/actividad");
const router = express.Router();

// Crear actividad
router.post("/actividades", async (req, res) => {
    const actividad = new actividadSchema(req.body);
    actividad.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Listar actividades
router.get("/actividades", async (req, res) => {
    actividadSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Tomar una actividad
router.get("/actividades/:id", async (req, res) => {
    const { id } = req.params;
    actividadSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//eliminar actividad
router.delete("/actividades/:id", async (req, res) => {
    const { id } = req.params;
    actividadSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})
//actualizar actividad

router.put("/actividades/:id", async (req, res) => {
    const { id } = req.params;
    actividadSchema.updateOne({ _id: id }, { $set: req.body })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;