const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(8080); //ouve a porta 8080, o mesmo que dizer ao servidor que ao abrir o app ele deve ser aberto na porta 8080
console.log("Running");
