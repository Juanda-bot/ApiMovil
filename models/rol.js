const mongooase = require("mongoose");

const rolSchema = mongooase.Schema({
    name: {
        type: String,
        required: true,
    }
});
module.exports = mongooase.model("rol", rolSchema);