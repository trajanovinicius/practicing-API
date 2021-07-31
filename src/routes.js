const express = require("express");
const routes = express.Router();

const TextController = require("./controllers/TextController");

routes.post("/text", TextController.store);

routes.get("/text-msg", TextController.index);

module.exports = routes;
