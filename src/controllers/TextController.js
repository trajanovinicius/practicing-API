const axios = require("axios");
const Text = require("../models/Text");

module.exports = {
  async index(req, res) {
    try {

      const textos = await axios.get(`${process.env.URL_LORIPSUM}`);

      return res.json({
        textos,
        message: "Texto retornado com sucesso!",
      });
    } catch (error) {
      return res.json({ error });
    }
  },


};
