const express = require("express");
const permisoSchema = require("../models/permiso");
const router = express.Router();

// Crear permiso
router.post("/permisos", async (req, res) => {
    const permiso = new permisoSchema(req.body);
    permiso.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Listar permisos
router.get("/permisos", async (req, res) => {
    permisoSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Tomar un permiso
router.get("/permisos/:id", async (req, res) => {
    const { id } = req.params;
    permisoSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//eliminar permiso
router.delete("/permisos/:id", async (req, res) => {
    const { id } = req.params;
    permisoSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

//actualizar observacion
router.put("/permisos/id", async (req, res)=> { 
    const {id} = req.params;
    permisoSchema.updateOne({_id:id}, req.body)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})
module.exports = router