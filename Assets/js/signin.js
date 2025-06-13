// Botão de ver senha
let botao = document.querySelector('.fa-eye')
botao.addEventListener('click', function(){
    let inputSenha = document.querySelector('#senha') // Seleciona o campo de senha

    if (inputSenha.getAttribute('type') == 'password') { // Verifica se o campo é do tipo senha
        inputSenha.setAttribute('type', 'text') // Altera o tipo para texto
        } else {
            inputSenha.setAttribute('type', 'password') // Altera o tipo para senha
        }
})
// Fazendo enter mudar de campos
let inputs = document.querySelectorAll('input') // Seleciona todos os campos
inputs.forEach((input, index) => { // Começa a avaliar todos os campos
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {  // Detecta se enter foi apertado
            e.preventDefault() // Impede a função original
            if (inputs[index + 1]) {  // Detecta se tem mais um campos
                inputs[index + 1].focus()  // Passa pro próximo campos
            }
        }
    })
})
// Fazendo enter Entrar
let senhaInput = document.querySelector('#senha') // Seleciona o campo de confirmação de senha
senhaInput.addEventListener('keydown', function(e) { // Adiciona o evento de pressionar tecla
    if (e.key === 'Enter') { // Detecta se enter foi apertado
        e.preventDefault() // Impede a função original
        entrar() // Clica em 'Entrar'
    }
})
// Criando entrar
function entrar(){
    let usuario = document.querySelector('#usuario') // Seleciona o campo de usuário
    let labelusuario = document.querySelector('#labelusuario') // Seleciona o label do campo de usuário
    let senha = document.querySelector('#senha') // Seleciona o campo de senha
    let labelsenha = document.querySelector('#labelsenha') // Seleciona o label do campo de senha
    let msgError = document.querySelector('#msgError') // Seleciona a mensagem de erro
    let listaUser = [] // Cria a lista de usuários registrados
    // Lista de usuários registrados
    let uservalid = { // Cria as categorias de usuário válido
        nome: null,
        usuario: null,
        senha: null
    }
    // Criando o armazenamento
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    if (!listaUser) { // Verifica se a lista de usuários existe
        listaUser = [] // Se não existir, cria uma lista vazia
    }
    // Salvando os dados do Usuário logado
    listaUser.forEach(item => {
        if(usuario.value == item.usuarioCad && senha.value == item.senhaCad){ // Verifica se o usuário e a senha estão corretos
            uservalid = { // Se estiver correto, salva os dados do usuário
                nome: item.nomeCad,
                usuario: item.usuarioCad,
                senha: item.senhaCad
            }
        }
    })
    // Redirecionando o Usuário caso seja correto
    if (usuario.value == uservalid.usuario && senha.value == uservalid.senha){
    // Redirecionando para a página inicial
        window.location.href = '../../index.html'
    // Criando o token
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)  // Criando o token de login
    // Guardando o token de login
        localStorage.setItem('token', token) // Colocando o token no localStorage
    // Colocando dado de user logado
        localStorage.setItem('userLogado', JSON.stringify(uservalid)) // Colocando os dados do usuário logado no localStorage
    // Notificando o erro
    } else {
        labelusuario.setAttribute('style', 'color: red') // Colocando o label do usuário vermelho
        usuario.setAttribute('style', 'border-color: red') // Colocando o campo de usuário vermelho
        labelsenha.setAttribute('style', 'color: red') // Colocando o label da senha vermelho
        senha.setAttribute('style', 'border-color: red') // Colocando o campo de senha vermelho
        msgError.setAttribute('style', 'display: block') // Colocando a mensagem de erro visível
        msgError.innerHTML = 'Usuário ou Senha incorreto' // Colocando a mensagem de erro
        usuario.focus() // Colocando o foco no campo de usuário
    }
}