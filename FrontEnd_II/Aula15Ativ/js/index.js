let dados = [];
let cardReference = document.querySelector('.card');
let randomReference = document.querySelector('#random');

// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
// window.onload = 
function consultaApi() {
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            //manipulamos a resposta

            // console.log(data.results)
            let resultados = data.results[0]
            // console.log(data.name)
            dados.imagem = resultados.picture.large
            dados.firstName = resultados.name.first
            dados.lastName = resultados.name.last
            dados.email = resultados.email
            renderizarDadosUsuario(dados);
            // console.log(dados)
        })
        ;

    // console.log(dados)

}



function renderizarDadosUsuario(dados) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
    // let imgReference = document.getElementsByTagName('img')
    // let nomeCompletoReference = document.querySelector('#nomeCompleto')
    // let emailReference = document.querySelector('#email')

    cardReference.innerHTML = `
    <img src=${dados.imagem} alt="erro">
    <p>Nome Completo: ${dados.firstName} ${dados.lastName}</p>
    <p>Email: ${dados.email}</p> 
    
  `
    // imgReference.src += `'
    // ${dados.imagem}'
    // `
    // nomeCompletoReference.innerHTML += `
    // ${dados.firstName} ${dados.lastName}
    // `
    // emailReference.innerHTML += `
    // ${dados.email}
    // `

}

//  renderizarDadosUsuario();


/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.
randomReference.addEventListener('click', event => {
    event.preventDefault();
    // location.reload();
    consultaApi();
})

 window.onload = consultaApi();