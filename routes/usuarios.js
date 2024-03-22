const express = require("express");
const usuarioSchema = require("../models/usuario");
const router = express.Router();

//crear usuario
router.post("/usuarios", async (req, res) => {
    const usuario = new usuarioSchema(req.body);
    usuario.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//listar usuarios
router.get("/usuarios", async (req, res) => {
    usuarioSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//tomar usuario
router.get("/usuarios/:id", async (req, res) => {
    const { id } = req.params;
    usuarioSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//eliminar usuario
router.delete("/usuarios/:id", async (req, res) => {
    const { id } = req.params;
    usuarioSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

//actualizar usuario
router.put("/usuarios/:id", async (req, res) => {
    const { id } = req.params;
    usuarioSchema.updateOne({ _id: id }, { $set: req.body })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
