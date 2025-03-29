const express = require("express");
const Controller = require("../controllers/controller");

const rotas = express.Router();

let pagina = new Controller();

rotas.get('/', pagina.PaginaDeTeste);

module.exports = rotas;