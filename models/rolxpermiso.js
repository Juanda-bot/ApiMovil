const mongooase = require("mongoose");
const rolxpermisoSchema = mongooase.Schema({
    rolid: {
        type: mongooase.Schema.Types.ObjectId,
        ref: "rol",
        required: true,
    },
    permisoid: {
        type: mongooase.Schema.Types.ObjectId,
        ref: "permiso",
        required: true,
    }
});
module.exports = mongooase.model("rolxpermiso", rolxpermisoSchema);