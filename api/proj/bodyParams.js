const express = require('express');

const app = express();

app.listen('3000');

//middleware
app.use(express.json());

app.route('/').post((req, res) => {
  const {nome, cidade, livrosFavoritos} = req.body;
  res.send(`Meu nome é ${nome} e minha cidade é ${cidade}. 
  Veja minha lista de livros favoritos: ${livrosFavoritos}`);
})