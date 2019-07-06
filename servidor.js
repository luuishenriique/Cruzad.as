const express = require('express');
const session = require('express-session');

const host = 'localhost';
const porta = 3000;

var app = express();

app.use(express.static('public'));

app.use(session({ secret: 'XXassasas¨¨$', resave: false, saveUninitialized: true }));

// entre em localhost:3000 para escrever os dados na sessao

app.get('/', function(req, res, next) {
	 res.sendFile('index.html' , { root : __dirname});
});

app.get('/index.html', function(req, res, next) {
	 res.sendFile('index.html' , { root : __dirname});
});

app.get('/sobre.html', function(req, res, next) {
	res.sendFile('sobre.html' , { root : __dirname});
});

app.get('/ajuda.html', function(req, res, next) {
	res.sendFile('ajuda.html' , { root : __dirname});
});

app.get('/apresentacao.html', function(req, res, next) {
	res.sendFile('apresentacao.html' , { root : __dirname});
});

app.get('/frutas.html', function(req, res, next) {
	res.sendFile('frutas.html' , { root : __dirname});
});

app.get('/historia.html', function(req, res, next) {
	res.sendFile('historia.html' , { root : __dirname});
});

app.get('/geral.html', function(req, res, next) {
	res.sendFile('geral.html' , { root : __dirname});
});

app.listen(3000, () => {
  console.log('Escutando localhost:3000');
})

var arrayresposta = 

['A' ,'C' ,'E' ,'R' ,'O' ,'L' ,'A' ,'' ,'' ,'T',
'' ,'A' ,'' ,'' ,'' ,'I' ,'' ,'M' ,'' ,'O',
'' ,'C' ,'' ,'M' ,'' ,'M' ,'' ,'A' ,'' ,'M',
'B' ,'A' ,'N' ,'A' ,'N' ,'A' ,'' ,'M' ,'' ,'A',
'' ,'U' ,'' ,'Ç' ,'' ,'O' ,'' ,'A' ,'' ,'T',
'U' ,'' ,'' ,'A' ,'' ,'' ,'' ,'O' ,'' ,'E',
'V' ,'' ,'' ,'' ,'' ,'' ,'J' ,'' ,'' ,'',
'A' ,'' ,'' ,'L' ,'A' ,'R' ,'A' ,'N' ,'J' ,'A',
'' ,'' ,'' ,'' ,'' ,'' ,'C' ,'' ,'' ,'',
'K' ,'I' ,'W' ,'I' ,'' ,'C' ,'A' ,'J' ,'U' ,'']

app.post('/gabarito', (req,res) => {
	const {resposta} = req.body;
	if (resposta == arrayresposta) {
		res.write("<h1> Parabéns, você conseguiu completar as palavras! :D <h1>");
	}else{
		res.write("<h1> Algumas coisas estão faltando, tente novamente!");
	}
})


