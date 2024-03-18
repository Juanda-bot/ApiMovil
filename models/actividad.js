const mongooase = require("mongoose");
const actividadSchema = mongooase.Schema({
    proyectosid: {
        type: mongooase.Schema.Types.ObjectId,
        ref: "proyecto",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    estadoactividad: {
        type: String,
        required: true,
    },
    fechainicioActividad: {
        type: Date,
        required: true,
    },
    fechafinActividad: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});
module.exports = mongooase.model("actividad", actividadSchema);