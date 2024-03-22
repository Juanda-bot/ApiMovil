const express = require("express");
const tareaSchema = require("../models/tarea");
const router = express.Router();

//crear tarea
router.post("/tareas", async (req, res) => {
    const tarea = new tareaSchema(req.body);
    tarea.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//listar tareas
router.get("/tareas", async (req, res) => {
    tareaSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//tomar tarea
router.get("/tareas/:id", async (req, res) => {
    const { id } = req.params;
    tareaSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//eliminar tarea
router.delete("/tareas/:id", async (req, res) => {
    const { id } = req.params;
    tareaSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//actualizar miembrosproyecto
router.put("/tareas/:id", async (req, res) => {
    const { id } = req.params;
    tareaSchema.updateOne({ _id: id }, { $set: req.body })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;