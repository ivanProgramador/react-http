/*
Existe umm site de teste para o envio de requisições 

https://reqres.in/

o melhor lugar para executar uma resquisição e dentro do metodo componentDidMount()
a rewquisição abaixo e do tipo get que tras todos os ususarios e retorna no formato json();

*/

componentDidMount(){

    fetch('https://reqres.in/api/users')
    .then(function(resposta){
      return resposta.json();
    })
    .then(function(dados){
      console.log(dados);
    })
    
 }

 /*refatorada */

 componentDidMount(){

  fetch('https://reqres.in/api/users')
  .then(resposta=>resposta.json())
  .then(dados=>{
    console.log(dados);
   })
  
}
/*
 problema: quando um dado é recebido de uma 
           api nem sempre ele esta na forma 
           correta para montar o componte.
           oque eo caso desse projeto.
           
  No projeto nos temos o campo nome e sobrenome porem na api esses dados vem como 
  'name','last_name' então vai ser preciso converter em dados que os componete vão entender 


*/

componentDidMount(){

  fetch('https://reqres.in/api/users')
  .then(resposta=>resposta.json())
  .then(dados=>{
     /*crio  avriavel usuarios que vai receber os dados 
       depois eu pego os dados que vem dentro do parametro dados
       como se trata de um array ele tem a função map
       eu jogo tudo oque vier pra dentro da variavel usuario
     */
     const usuarios = dados.data.map(usuario=>{

      /* agora eu crio um objeto pra ele retornar 
         que tem os atributos que o componente do meu projeto precisa
         ai eu faço a atribuição por exemplo
         da api vai um atributo chamado first_name eu atribuo a propriedade nome 
         e assim por diante.ai quando eu pegar essa variavel os dados ja vem convertidos     
      */
          
          return{

            id: usuario.id,
            nome: usuario.nome,
            sobrenome: usuario.last_name,
            email: usuario.email

          }

       /*atualizando o state */
       this.setState({usuarios:usuarios});

       /*quando o nome de uma variavel eo nome do objeto no state são o mesmo 
        podemos ignorar a sintaxe de traibuição e fazer assim*/

        this.setState({usuarios});
     })
   })
  
}


/*metodo post */

