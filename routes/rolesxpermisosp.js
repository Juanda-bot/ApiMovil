const express = require("express");
const rolxpermisopSchema = require("../models/rolxpermisop");
const router = express.Router();

//crear rolxpermiso
router.post("/rolesxpermisosp", async (req, res) => {
    const rolxpermiso = new rolxpermisopSchema(req.body);
    rolxpermiso.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//listar rolesxpermisos
router.get("/rolesxpermisosp", async (req, res) => {
    rolxpermisopSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//tomar rolxpermiso
router.get("/rolesxpermisosp/:id", async (req, res) => {
    const { id } = req.params;
    rolxpermisopSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//eliminar rolxpermiso
router.delete("/rolesxpermisosp/:id", async (req, res) => {
    const { id } = req.params;
    rolxpermisopSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//actualizar rolxpermiso
router.put("/rolesxpermisosp/:id", async (req, res) => {
    const { id } = req.params;
    const { rolid, permisoid } = req.body;
    rolxpermisopSchema.updateOne({ _id: id }, { $set: { rolid, permisoid } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;