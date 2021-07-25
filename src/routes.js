const express = require("express");
const routes = express.Router();

const TeamsController = require("./controllers/TeamsControllers");

routes.get("/teams", TeamsController.index);
