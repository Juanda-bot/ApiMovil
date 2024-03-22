const express = require("express");
const rolxpermisoSchema = require("../models/rolxpermiso");
const router = express.Router();

//crear rolxpermiso
router.post("/rolesxpermisos", async (req, res) => {
    const rolxpermiso = new rolxpermisoSchema(req.body);
    rolxpermiso.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//listar rolesxpermisos
router.get("/rolesxpermisos", async (req, res) => {
    rolxpermisoSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//tomar rolxpermiso
router.get("/rolesxpermisos/:id", async (req, res) => {
    const { id } = req.params;
    rolxpermisoSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//eliminar rolxpermiso
router.delete("/rolesxpermisos/:id", async (req, res) => {
    const { id } = req.params;
    rolxpermisoSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//actualizar rolxpermiso
router.put("/rolesxpermisos/:id", async (req, res) => {
    const { id } = req.params;
    const { rolid, permisoid } = req.body;
    rolxpermisoSchema.updateOne({ _id: id }, { $set: { rolid, permisoid } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;