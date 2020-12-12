const express = require("express");

const UserController = require("./controllers/UserController");
const BookController = require("./controllers/BookController");

const routes = express.Router();

routes.get("/users", UserController.index);

routes.post("/users", UserController.create);

routes.get("/books", BookController.index);

routes.post("/books", BookController.create);

module.exports = routes;
