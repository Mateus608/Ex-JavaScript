const express = require('express'); // Chama o módulo(express)

const app = express(); // Inicializa a constante express

app.listen('3000'); // Porta

// Rota do site (req = requisition, res = response)
// GET
app.route('/').get( (req,res) => res.send("hello") ); 
app.route('/sobre').get( (req,res) => res.send("hello sobre") );

// middleware (ponte entre as requisições)
app.use(express.json());

// POST
//app.route('/').post( (req,res) => console.log(req.body) );
app.route('/').post( (req,res) => res.send(res.body) );

// PUT
let author = "Mateus";
app.route('/').get( (req,res) => res.send(author) );

app.route('/').put( (req,res) => {
  author = req.body.author;
  res.send(author);
});

// DELETE
app.route('/:identificador').delete( (req,res) => {
  author = "";
  res.send(req.params.identificador); 
});