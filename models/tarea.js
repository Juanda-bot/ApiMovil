const mongooase = require("mongoose");

const tareaSchema = mongooase.Schema({
    idactividad: {
        type: mongooase.Schema.Types.ObjectId,
        ref: "actividad",
        required: true,
    },
    idmiembroproyecto: {
        type: mongooase.Schema.Types.ObjectId,
        ref: "miembroproyecto",
        required: true,
    },
    nombretarea: {
        type: String,
        required: true,
    },
    estadotarea: {
        type: String,
        required: true,
    },
    fechainicioTarea: {
        type: Date,
        required: true,
    },
    fechafinTarea: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});
module.exports = mongooase.model("tarea", tareaSchema);