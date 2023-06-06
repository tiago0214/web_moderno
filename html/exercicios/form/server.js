const express = require('express') // aqui eu importei o express
const app = express() // aqui eu instancie o express e associei a uma variavel, para que eu possa usa-lo.
const bodyParser = require('body-parser')// ele funciona para toda vez que eu fazer uma requisição é vai fazer um parser(analisar) no corpo da requisição
//O body-parser é pra converter o body da requisição para vários formatos, inclusive json.
//O body-parser, vai pegar o corpo do request e colocar dentro do request.body
// ou seja, quando eu acessar request.body, eu vou ter acesso a todos os dados do formulário que eu submeti.
//urlencode: é quando eu submeto um formulário, é o padrão que vem, então ele precisa fazer o parser a partir da urlencode

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios',(req,resp)=>{
    console.log(req.body)
    resp.send('Começou a aprender, parabéns!')
})

app.listen(3003)