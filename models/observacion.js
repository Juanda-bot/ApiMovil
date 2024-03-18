const mongooase = require("mongoose");
const observacionSchema = mongooase.Schema({
    proyectosid: {
        type: mongooase.Schema.Types.ObjectId,
        ref: "proyecto",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});
module.exports = mongooase.model("observacion", observacionSchema);