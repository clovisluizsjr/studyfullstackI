const express = require("express");
const rotas = require("./routes/router.js");
const app = express();

app.set('view engine', 'ejs');
app.use("/", rotas);

app.listen(5000, function(){
    console.log("Servidor rodando na porta 5000!");
})