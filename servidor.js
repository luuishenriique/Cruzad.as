var http = require('http'); //Chamadas de variáves importadas do node para a criação do servidor
var url = require('url');
var fs = require('fs');

//Criação do servidor
http.createServer(function (req,res) {

    var q = url.parse(req.url, true); //Variável para armazenamento dos valores da url
    var filename = "." + q.pathname; 
    
    //Chamada do arquivo e condição para abertura
    fs.readFile(filename, function(err,data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('URL indefinida!');
        }

        res.write(data);
        res.end();
    });
})

//Chamada da porta e aviso de uso
.listen(8080, function() {
    console.log('Servidor ativo no endereço: http://localhost:8080');
    console.log('Para desativar pressione ctlr + c');    
});