const  mongooase = require("mongoose");

const usuarioSchema = mongooase.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    idrol: {
        type: mongooase.Schema.Types.ObjectId,
        ref: "rol",
        required: true,    
    },
    estado: {
        type: String,
        required: true,
    }
});
module.exports = mongooase.model("usuario", usuarioSchema);
