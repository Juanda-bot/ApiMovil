const express = require("express");
const observacionSchema = require("../models/observacion");
const router = express.Router();

//crear observacion
router.post("/observaciones", async (req, res) => {
    const observacion = new observacionSchema(req.body);
    observacion.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//listar proyectos
router.get("/observaciones", async (req, res) => {
    observacionSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})
//tomar observacion
router.get("/observaciones/:id", async (req, res) => {
    const { id } = req.params;
    observacionSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

//eliminar observacion
router.delete("/observaciones/:id", async (req, res) => {
    const { id } = req.params;
    observacionSchema.remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})
//actualizar observacion
router.put("/observaciones/id", async (req, res)=> { 
    const {id} = req.params;
    proyectosSchema.updateOne({_id:id}, req.body)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})


module.exports = router