// routes/clientes.js

const express = require("express");
const clienteSchema = require("../models/cliente");
const router = express.Router();

// Crear cliente
router.post("/clientes", async (req, res) => {
    const Cliente = new clienteSchema(req.body);
    Cliente.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Listar clientes
router.get("/clientes", async (req, res) => {
    clienteSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Tomar un cliente
router.get("/clientes/:id", async (req, res) => {
    const { id } = req.params;
    clienteSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Eliminar cliente
router.delete("/clientes/:id", async (req, res) => {
    const { id } = req.params;
    clienteSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Actualizar cliente
router.put("/clientes/:id", async (req, res) => {
    const { id } = req.params;
    clienteSchema.updateOne({ _id: id }, { $set: req.body })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
