const mongooase = require("mongoose");
const permisoSchema = mongooase.Schema({
    name: {
        type: String,
        required: true,
    }
});
module.exports = mongooase.model("permiso", permisoSchema);