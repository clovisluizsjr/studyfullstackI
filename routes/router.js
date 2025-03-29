const express = require("express");
const Controller = require("../controllers/controller");
const rotas = express.Router();

let page = new Controller();

rotas.get('/page', page.PaginaDeTeste);

module.exports = rotas;