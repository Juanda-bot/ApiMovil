const express = require("express");
const rolpSchema = require("../models/rolp");
const router = express.Router();

//creal rol
router.post("/rolesp", async (req, res) => {
    const rol = new rolpSchema(req.body);
    rol.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//listar roles
router.get("/rolesp", async (req, res) => {
    rolpSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//tomar rol
router.get("/rolesp/:id", async (req, res) => {
    const { id } = req.params;
    rolpSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//eliminar rol
router.delete("/rolesp/:id", async (req, res) => {
    const { id } = req.params;
    rolpSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//actualizar rol
router.put("/rolesp/:id", async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    rolpSchema.updateOne({ _id: id }, { $set: { name } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;