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


/*metodo post
  O metodo post esta sendo ezecutado de de uma funcção chamada
  onSubmitHandler(event) qu espera o submit acontecer recebe o evento e 
  impede que ele siga para a proxima pagina sem de fato executar o post
*/


onSubmitHandler(event) {
  event.preventDefault()

  /* Aqui eu declaro uma variavel 
     que pegar todos os dados que estão dentro do 
     state na posição usuarios
  */

  const usuario = this.state.usuario;

  /* Agora eu faço um fetch na url da api pegando todos os ususrios que vem dela
     por essa rota so que a função fetch recebe 2 parametros 
     1 É a url da requisição.

     2 É um objeto com dados da requisição
       que eu quero fazer ele exige que o objeto tenha 3 informações 
       
       method -> por padrão a requisição feita com um fetch é get 
                 se eu quiser fazer um post eu tenho que avisar nesse objeto 
                 por isso method:'POST'

       headers -> essa parte de cabeçalho é sobre oque eu vou mandar 
                  nesse caso eu disse que vou mandar para applicação 
                  um json mas tem api que recebe outras coisas. por 
                  isso  headers: {'Content-Type':'application/json' }

        body -> aqui eo corpo da requisição onde defato os dado esta  
                a variavel usuario ja vem pronta do formulario porem
                eu não posso enviar ela de qualquer jeito a api esta
                esperando um json por isso eu uso o conversor pra 
                tranformar o objetoque vem do formulario em um json,
                 body: JSON.stringify(usuario)
        
        Essa e a estrutura necessaria para fazer um post      
      
  
  */

    fetch('https://reqres.in/api/users',{
      method:'POST',
      headers: {'Content-Type':'application/json' },
      body: JSON.stringify(usuario)
      }
    )
    .then(resposta=>resposta.json())
    .then(dados=>{
      console.log(dados);
      this.setState(INITIAL_STATE)
      this.props.adicionarUsuario(dados)

    })
 }

