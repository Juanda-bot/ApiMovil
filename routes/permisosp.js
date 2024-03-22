const express = require("express");
const permisopSchema = require("../models/permisop");
const router = express.Router();

// Crear permiso
router.post("/permisosp", async (req, res) => {
    const permiso = new permisopSchema(req.body);
    permiso.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Listar permisos
router.get("/permisosp", async (req, res) => {
    permisopSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Tomar un permiso
router.get("/permisosp/:id", async (req, res) => {
    const { id } = req.params;
    permisopSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//eliminar permiso
router.delete("/permisosp/:id", async (req, res) => {
    const { id } = req.params;
    permisopSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

//actualizar permiso
router.put("/permisosp/:id", async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    permisopSchema.updateOne({ _id: id }, { $set: req.body })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

module.exports = router