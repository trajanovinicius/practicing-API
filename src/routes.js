const express = require("express");
const routes = express.Router();

const MessageController = require("./controllers/MessageController");

routes.get("/message", MessageController.index);

module.exports = routes;
