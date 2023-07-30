const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  tel: { type: String, required: true },
  brands: [{ type: mongoose.Schema.Types.ObjectId, ref: "Brand" }],
});

module.exports = mongoose.model("Client", clientSchema);
