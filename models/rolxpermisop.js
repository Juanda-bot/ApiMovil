const mongooase = require("mongoose");
const rolxpermisopSchema = mongooase.Schema({
    rolid: {
        type: mongooase.Schema.Types.ObjectId,
        ref: "rolp",
        required: true,
    },
    permisoid: {
        type: mongooase.Schema.Types.ObjectId,
        ref: "permisop",
        required: true,
    }
});
module.exports = mongooase.model("rolxpermisop", rolxpermisopSchema);