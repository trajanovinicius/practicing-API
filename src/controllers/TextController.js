const axios = require("axios");
const Text = require("../models/Text");

module.exports = {
  async store(req, res) {
    try {
      const textos = await axios.get(`${process.env.URL_LORIPSUM}`);
      return res.json({
        message: "Texto retornado com sucesso!",
      });
    } catch (error) {
      return res.json({ error });
    }
  },

  async index(req, res) {
    try {
      const texts = await Text.find();

      return res.json({ texts });
    } catch (error) {
      return res.json({ error });
    }
  },
};
