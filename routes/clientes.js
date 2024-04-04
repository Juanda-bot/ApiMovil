const express = require("express");
const clienteSchema = require("../models/cliente");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Crear cliente (register)
router.post("/clientes", async (req, res) => {
    try {
        const existingCliente = await clienteSchema.findOne({ email: req.body.email });
        if (existingCliente) {
            return res.status(400).json({ message: 'El cliente ya está registrado.' });
        }

        const newCliente = new clienteSchema(req.body);
        await newCliente.save();
        res.json(newCliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// iniciar sesion
router.post("/clientes/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingCliente = await clienteSchema.findOne({ email });
        if (!existingCliente) {
            return res.status(401).json({ message: 'Correo electrónico incorrecto.' });
        }

        if (password !== existingCliente.password) {
            return res.status(401).json({ message: 'Contraseña incorrecta.' });
        }
        const token = jwt.sign({ userId: existingCliente._id, email: existingCliente.email }, 'secreto', { expiresIn: '1h' });
        res.json({ cliente: existingCliente, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Cerrar sesión
router.post("/clientes/logout", async (req, res) => {
    try {
        res.clearCookie('session_id');
        res.status(200).json({ message: 'Cierre de sesión exitoso' });
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
        res.status(500).json({ message: 'Error al cerrar sesión' });
    }
});

// Listar clientes
router.get("/clientes", async (req, res) => {
    try {
        const clientes = await clienteSchema.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener un cliente por ID
router.get("/clientes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await clienteSchema.findById(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Eliminar cliente por ID
router.delete("/clientes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCliente = await clienteSchema.findByIdAndDelete(id);
        if (!deletedCliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json({ message: 'Cliente eliminado correctamente', cliente: deletedCliente });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Actualizar cliente por ID
router.put("/clientes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCliente = await clienteSchema.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedCliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json({ message: 'Cliente actualizado correctamente', cliente: updatedCliente });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
