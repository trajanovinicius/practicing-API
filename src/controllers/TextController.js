const axios = require("axios");
const Text = require("../models/Text");

exports = {
  async index(req, res) {
    try {
      const response = await axios.get(`${process.env.URL_LORIPSUM}`);
      return res.json({
        message: "Texto recebido com sucesso",
      });
    } catch (error) {
      return res.json({ error });
    }
  },
};
