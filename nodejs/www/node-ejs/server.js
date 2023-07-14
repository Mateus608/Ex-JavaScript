const express = require('express');
const app = express(); // instanciando o express e guardando na variavel app

// renderizar ejs
app.set("view engine", "ejs");

// criando uma rota ("/")
app.get("/", function (req, res) {
  const items = [
    {
      title: "D",
      message: "esenvolver aplicações/serviços de forma fácil"
    },
    {
      title: "E",
      message: "JS usa JavaScript para renderizar HTML"
    },
    {
      title: "M",
      message: "uito fácil de usar"
    },
    {
      title: "A",
      message: "predizagem facilitada"
    },
    {
      title: "I",
      message: "nstall ejs"
    },
    {
      title: "S",
      message: "intaxe simples"
    }

  ];

  const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS"
  // renderizar o index (res.render)
  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  }); 
})

// criando uma rota ("/sobre")
app.get("/sobre", function (req, res) {
  res.render("pages/about"); // renderizar o about (res.render)
})

// porta
app.listen(8080);
console.log("Sucess...");