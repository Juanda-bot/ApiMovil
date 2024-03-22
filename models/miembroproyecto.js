const mongooase = require("mongoose");
const miembroproyectoSchema = mongooase.Schema({
    
    usuariosid: {
        type: mongooase.Schema.Types.ObjectId,
        ref: "usuario",
        required: true,
    },
    proyectosid: {
        type: mongooase.Schema.Types.ObjectId,
        ref: "proyecto",
        required: true,
    },
    idrolp: {
        type: mongooase.Schema.Types.ObjectId,
        ref: "rolp",
        required: true,    
    }
});
module.exports = mongooase.model("miembroproyecto", miembroproyectoSchema);