const mongooase = require("mongoose");

const clienteSchema = mongooase.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    Documento: {
        type: String,
        required: true,    
    },
    tipoDocumento: {
        type: String,
        required: true,
    }
});

module.exports = mongooase.model("cliente", clienteSchema);