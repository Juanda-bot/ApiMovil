const mongooase = require("mongoose");

const rolpSchema = mongooase.Schema({
    name: {
        type: String,
        required: true,
    }
});
module.exports = mongooase.model("rolp", rolpSchema);