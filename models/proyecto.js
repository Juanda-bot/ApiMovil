const mongooase = require("mongoose");

const proyectoSchema = mongooase.Schema({
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