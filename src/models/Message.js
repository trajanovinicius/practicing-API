const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  mensagem: String,
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
