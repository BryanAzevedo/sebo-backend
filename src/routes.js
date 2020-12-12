const express = require('express');

const UserController = require('./controllers/UserController');
const BookController = require('./controllers/BookController');
const LoginController = require('./controllers/LoginController');

const routes = express.Router();

routes.post('/login', LoginController.create);

routes.get('/users', UserController.index);

routes.post('/users', UserController.create);

routes.get('/books', BookController.index);

routes.post('/books', BookController.create);

routes.delete('/books/:id', BookController.delete);

module.exports = routes;
