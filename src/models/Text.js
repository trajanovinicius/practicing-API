const mongoose = require("mongoose");

const textSchema = new mongoose.Schema({
  text: String,
  textos: String,
});

const Text = mongoose.model("Text", textSchema);
module.exports = Text;
