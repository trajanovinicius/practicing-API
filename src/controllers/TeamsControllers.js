const axios = require("axios");
const Teams = require("../models/Teams");

module.exports = {
  async index(req, res) {
    try {
      const teams = await Teams.find();

      return res.json({ teams });
    } catch (error) {
      return res.json({ error });
    }
  },
};
