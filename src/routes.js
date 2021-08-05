const express = require("express");
const routes = express.Router();

const TextController = require("./controllers/TextController");


routes.get("/text", TextController.index);

module.exports = routes;
