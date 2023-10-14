/*
Existe umm site de teste para o envio de requisições 

https://reqres.in/

o melhor lugar para executar uma resquisição e dentro do metodo componentDidMount()
a rewquisição abaixo e do tipo get que tras todos os ususarios e retorna no formato json();

*/

componentDidMount(){

    fetch('https://reqres.in/api/users')
    .then(function(resposta){
      return resposta.text();
    })
    .then(function(dados){
      console.log(dados);
    })
    
 }