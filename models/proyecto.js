const mongooase = require("mongoose");

const proyectoSchema = mongooase.Schema({
    clientesid: {
        type: mongooase.Schema.Types.ObjectId,
        ref: "cliente",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

module.exports = mongooase.model("proyecto", proyectoSchema);