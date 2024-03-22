const express = require("express");
const rolSchema = require("../models/rol");
const router = express.Router();

//creal rol
router.post("/roles", async (req, res) => {
    const rol = new rolSchema(req.body);
    rol.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//listar roles
router.get("/roles", async (req, res) => {
    rolSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//tomar rol
router.get("/roles/:id", async (req, res) => {
    const { id } = req.params;
    rolSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//eliminar rol
router.delete("/roles/:id", async (req, res) => {
    const { id } = req.params;
    rolSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//actualizar rol
router.put("/roles/:id", async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    rolSchema.updateOne({ _id: id }, { $set: { name } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;