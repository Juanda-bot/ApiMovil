const express = require("express");
const miembroproyectoSchema = require("../models/miembroproyecto");
const router = express.Router();

//crear miembroproyecto
router.post("/miembrosproyectos", async (req, res) => {
    const miembrosproyecto = new miembroproyectoSchema(req.body);
    miembrosproyecto.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//listar miembrosproyectos
router.get("/miembrosproyectos", async (req, res) => {
    miembroproyectoSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//tomar miembrosproyecto
router.get("/miembrosproyectos/:id", async (req, res) => {
    const { id } = req.params;
    miembroproyectoSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//eliminar miembrosproyecto
router.delete("/miembrosproyectos/:id", async (req, res) => {
    const { id } = req.params;
    miembroproyectoSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//actualizar miembrosproyecto
router.put("/miembrosproyectos/:id", async (req, res) => {
    const { id } = req.params;
    miembroproyectoSchema.updateOne({ _id: id }, { $set: req.body })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router