const mongooase = require("mongoose");
const permisopSchema = mongooase.Schema({
    name: {
        type: String,
        required: true,
    }
});
module.exports = mongooase.model("permisop", permisopSchema);