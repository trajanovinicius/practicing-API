const mongoose = require("mongoose");

const teamsSchema = new mongoose.Schema({
  nome: String,
  liga: String,
  euia: Number,
  procurar: String,
  Temporada: Number,
  país: String,
});

const Teams = mongoose.model("Teams", teamsSchema);
module.exports = Teams;
