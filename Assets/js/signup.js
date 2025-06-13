// Criando o nome
let nome = document.querySelector('#nome') // Coleta o dado presente nesse campo
let labelnome = document.querySelector('#labelnome') // Altera a linha
let validNome = false // Confirma ou nega se os dados estão corretos
// Criando o usuário
let usuario = document.querySelector('#usuario') // Coleta o dado presente nesse campo
let labelusuario = document.querySelector('#labelusuario') // Altera a linha
let validUsuario = false // Confirma ou nega se os dados estão corretos
let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [] // Criando a lista de usuários 
//Criando a idade
let idade  = document.querySelector('#idade') // Coleta o dado presente nesse campo
let labelidade = document.querySelector('#labelidade') // Altera a linha
let validIdade = false // Confirma ou nega se os dados estão corretos
// Criando o email
let email = document.querySelector('#email') // Coleta o dado presente nesse campo
let labelemail = document.querySelector('#labelemail') // Altera a linha
let validEmail = false // Confirma ou nega se os dados estão corretos
// Criando gêneros
let inputsgenero = document.querySelectorAll('input[name="genero"]') // Traz todos os inputs de nome genero
let labelgenero = document.querySelector('#labelgenero') // Altera a linha
let labelhomem = document.querySelector('#labelhomem') // Altera a linha
let labelmulher = document.querySelector('#labelmulher') // Altera a linha
let labeloutro = document.querySelector('#labeloutro') // Altera a linha
let validGenero = false  // Confirma ou nega se os dados estão corretos
// Criando a senha
let senha  = document.querySelector('#senha') // Coleta o dado presente nesse campo
let labelsenha = document.querySelector('#labelsenha') // Altera a linha
let validSenha = false // Confirma ou nega se os dados estão corretos
// Criando a confirmação da senha
let confsenha  = document.querySelector('#confsenha') // Coleta o dado presente nesse campo
let labelconfsenha = document.querySelector('#labelconfsenha') // Altera a linha
let validConfsenha = false // Confirma ou nega se os dados estão corretos
// Drop da validação da senha
let caracteres  = document.querySelector("#caracteres ") // Caracteres mínimos
let minuscula = document.querySelector("#minuscula") // Letra minúscula
let maiuscula = document.querySelector("#maiuscula") // Letra maiúscula
let numero = document.querySelector("#numero") // Números
let especial = document.querySelector("#especial") // Caractere especial
let confirmar = document.querySelector("#confirmar") // Confirmação igual
//Definindo o que acontece em nome
nome.addEventListener('keyup', () =>{
    if(nome.value.length <= 2){ // Determina caractéres mínimos pro nome
        labelnome.style.color = 'red' // Cor da escrita caso o dado esteja errado
        labelnome.innerHTML = '<strong> Nome *Insira no mínimo 3 caracteres </strong>' // Mensagem de auxilio de erro
        nome.setAttribute('style', 'border-color: red') // Cor da linha em caso de erro
        validNome = false // Dado negado
    } else {
        labelnome.style.color = 'green' // Cor da escrita caso o dado esteja certo
        labelnome.innerHTML = 'Nome' // Categoria do dado aceito
        nome.setAttribute('style', 'border-color: green') // Cor da linha em caso de acerto
        validNome = true // Dado aceito
    }
})
//Definindo o que acontece em usuario
usuario.addEventListener('keyup', () =>{
    if (usuario.value.length <= 4 || listaUser.some(item => item.usuarioCad === usuario.value)) { // Determina caractéres mínimos pro nome de usuário
        labelusuario.style.color = 'red' // Cor da escrita caso o dado esteja errado
        usuario.setAttribute('style', 'border-color: red') // Cor da linha em caso de erro
        if (usuario.value.length <= 4) {
            labelusuario.innerHTML = '<strong> Usuário *Insira no mínimo 5 caracteres </strong>' // Mensagem de auxilio de erro
        } else {
            labelusuario.innerHTML = '<strong> Usuário *Nome em uso, insira outro </strong>' //
        }
        validUsuario = false // Dado negado
    } else {
    labelusuario.style.color = 'green' // Cor da escrita caso o dado esteja certo
    labelusuario.innerHTML = 'Usuário' // Categoria do dado aceito
    usuario.setAttribute('style', 'border-color: green') // Cor da linha em caso de acerto
    validUsuario = true // Dado aceito
    }
})
//Definindo o que acontece em idade
idade.addEventListener('keyup', () =>{
    if(idade.value < 0 || idade.value > 120 || !/\d/.test(idade.value)){ // Condições para idade válida
        labelidade.style.color = 'red' // Cor da escrita caso o dado esteja errado
        labelidade.innerHTML = '<strong> Idade *Insira uma idade válida </strong>' // Mensagem de auxilio de erro
        idade.setAttribute('style', 'border-color: red') // Cor da linha em caso de erro
        validIdade = false // Dado negado
    } else {
        labelidade.style.color = 'green' // Cor da escrita caso o dado esteja certo
        labelidade.innerHTML = 'Idade' // Categoria do dado aceito
        idade.setAttribute('style', 'border-color: green') // Cor da linha em caso de acerto
        validIdade = true // Dado aceito
    }
})
//Definindo o que acontece em email
email.addEventListener('keyup', () =>{
    if (email.value == ''){ // Determina o que acontece em caso de email vazio
        labelemail.style.color = 'rgb(43, 46, 196)' // Cor da escrita em caso de caixa vazia
        labelemail.innerHTML = 'Email: nome@example.com' // Mensagem de auxilio exemplificando
        email.setAttribute('style', 'border-color: rgb(43, 46, 196)') // Cor da linha em caso de caixa vazia
    } else if(!email.value.includes('@') || !email.value.includes('.com')){  // Condições para email válido
        labelemail.style.color = 'red' // Cor da escrita caso o dado esteja errado
    labelemail.innerHTML = '<strong> Email *Insira um email válido </strong>' // Mensagem de auxilio de erro
    email.setAttribute('style', 'border-color: red') // Cor da linha em caso de erro
    validEmail = false // Dado negado
    } else {
        labelemail.style.color = 'green' // Cor da escrita caso o dado esteja certo
        labelemail.innerHTML = 'Email' // Categoria do dado aceito
        email.setAttribute('style', 'border-color: green') // Cor da linha em caso de acerto
        validEmail = true // Dado aceito
    }
})
// Definindo o que acontece em gênero
inputsgenero.forEach(input => { // Seleciona todas as opções de gênero
    input.addEventListener('change', () => { // Muda quando o usuário seleciona um gênero ou muda sua escolha
        let generoselecionado = document.querySelector('input[name="genero"]:checked') // Seleciona o gênero escolhido
        if(!generoselecionado) { // Se gênero não for selecionado
            labelgenero.style.color = 'red' // Cor da escrita caso o dado esteja errado
            labelgenero.innerHTML = '<strong>Gênero *Selecione uma opção</strong>' // Mensagem de auxilio de erro
            labelhomem.style.color = 'red' // Cor da escrita caso o dado esteja certo
            labelmulher.style.color = 'red' // Cor da escrita caso o dado esteja certo
            labeloutro.style.color = 'red' // Cor da escrita caso o dado esteja certo
            validGenero = false // Dado negado
        } else { // Se gênero for selecionado
            labelgenero.style.color = 'green' 
            labelgenero.innerHTML = 'Gênero: ' // Categoria do dado aceito
            labelhomem.style.color = 'green' // Cor da escrita caso o dado esteja certo
            labelmulher.style.color = 'green' // Cor da escrita caso o dado esteja certo
            labeloutro.style.color = 'green' // Cor da escrita caso o dado esteja certo
            validGenero = true // Dado aceito
        }
    })
})
//Definindo o que acontece em senha
senha.addEventListener('focus', () => {
    requisitos_senha.classList.add('visible')
})
senha.addEventListener('input', () =>{
    if(senha.value.length <= 7 || !/[^a-zA-Z0-9]/.test(senha.value) || !/\d/.test(senha.value) || !/[a-z]/.test(senha.value) || !/[A-Z]/.test(senha.value)){ // Condições para senha válida
        labelsenha.style.color = 'red' // Cor da escrita caso o dado esteja errado
        labelsenha.innerHTML = '<strong> Senha </strong>' // Mensagem de auxilio de erro
        senha.setAttribute('style', 'border-color: red') // Cor da linha em caso de erro
        validSenha = false // Dado negado
    } else {
        labelsenha.style.color = 'green' // Cor da escrita caso o dado esteja certo
        labelsenha.innerHTML = 'Senha' // Categoria do dado aceito
        senha.setAttribute('style', 'border-color: green') // Cor da linha em caso de acerto
        validSenha = true // Dado aceito
    }
    if (senha.value.length <= 7) { // Quesito mínimo
        caracteres.style.color = 'red' // Cor da mensagem
        caracteres.innerHTML = '<strong> A senha deve conter ao menos 8 caracteres </strong>' // Mensagem de apoio
    } else {
        caracteres.style.color = 'green' // Cor da mensagem
        caracteres.innerHTML = '<strong> A senha deve conter ao menos 8 caracteres </strong>' // Mensagem de apoio
    }
    if (!/[a-z]/.test(senha.value)) { // Quesito mínimo
        minuscula.style.color = 'red' // Cor da mensagem
        minuscula.innerHTML = '<strong> A senha deve conter ao menos uma letra minúscula </strong>' // Mensagem de apoio
    } else {
        minuscula.style.color = 'green' // Cor da mensagem
        minuscula.innerHTML = '<strong> A senha deve conter ao menos uma letra minúscula </strong>' // Mensagem de apoio
    }
    if (!/[A-Z]/.test(senha.value)) { // Quesito mínimo
        maiuscula.style.color = 'red' // Cor da mensagem
        maiuscula.innerHTML = '<strong> A senha deve conter ao menos uma letra maiúscula </strong>' // Mensagem de apoio
    } else {
        maiuscula.style.color = 'green' // Cor da mensagem
        maiuscula.innerHTML = '<strong> A senha deve conter ao menos uma letra maiúscula </strong>' // Mensagem de apoio
    }
    if (!/\d/.test(senha.value)) { // Quesito mínimo
        numero.style.color = 'red' // Cor da mensagem
        numero.innerHTML = '<strong> A senha deve conter ao menos um número </strong>' // Mensagem de apoio
    } else {
        numero.style.color = 'green' // Cor da mensagem
        numero.innerHTML = '<strong> A senha deve conter ao menos um número </strong>' // Mensagem de apoio
    }
    if (!/[^a-zA-Z-0-9]/.test(senha.value)) { // Quesito mínimo
        especial.style.color = 'red' // Cor da mensagem
        especial.innerHTML = '<strong> A senha deve conter ao menos um símbolo </strong>' // Mensagem de apoio
    } else {
        especial.style.color = 'green' // Cor da mensagem
        especial.innerHTML = '<strong> A senha deve conter ao menos um símbolo </strong>' // Mensagem de apoio
    }
})
//Definindo o que acontece em confirmação de senha
confsenha.addEventListener('keyup', () =>{
    if(confsenha.value != senha.value){
        labelconfsenha.style.color = 'red' // Cor da escrita caso o dado esteja errado
        labelconfsenha.innerHTML = '<strong> Confirmar Senha </strong>' // Mensagem de auxilio de erro
        confsenha.setAttribute('style', 'border-color: red') // Cor da linha em caso de erro
        validConfsenha = false // Dado negado
    } else if (confsenha.value == senha.value && confsenha.value.length > 7 && validSenha === true){
        labelconfsenha.style.color = 'green' // Cor da escrita caso o dado esteja certo
        labelconfsenha.innerHTML = 'Confirmar Senha' // Categoria do dado aceito
        confsenha.setAttribute('style', 'border-color: green') // Cor da linha em caso de acerto
        validConfsenha = true // Dado aceito
    }
    if (!validConfsenha) {
        confirmar.style.color = 'red' // Cor da mensagem
        confirmar.innerHTML = '<strong> Confirmar Senha: As senhas não conferem </strong>' // Mensagem de apoio
    } else {
        confirmar.style.color = 'green' // Cor da mensagem
        confirmar.innerHTML = '<strong> Confirmar Senha: As senhas conferem </strong>' // Mensagem de acerto
    }
})
//Definindo o que acontece ao clicar no cadastro
function cadastrar() {
    let generoselecionado = document.querySelector('input[name="genero"]:checked') // Seleciona o gênero escolhido
    if(validNome && validUsuario && validSenha && validConfsenha && validIdade && validEmail && validGenero) { // Verifica se todos os campos estão preenchidos corretamente
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]') // Verifica se a lista de usuários existe
        
        listaUser.push({ // Adiciona os dados do usuário na lista
            emailCad: email.value, // Adiciona o email
            generoCad: generoselecionado.value, // Adiciona o gênero
            idadeCad: idade.value, // Adiciona a idade
            nomeCad: nome.value, // Adiciona o nome
            senhaCad: senha.value, // Adiciona a senha
            usuarioCad: usuario.value // Adiciona o usuário
        })
        localStorage.setItem('listaUser', JSON.stringify(listaUser)) // Salva a lista de usuários no localStorage
        msgSucess.setAttribute('style', 'display: block') // Mostra a mensagem de sucesso
        msgSucess.innerHTML = '<strong> Cadastrando Usuário... </strong>' // Mensagem de sucesso
        msgError.setAttribute('style', 'display: none') // Esconde a mensagem de erro
        msgError.innerHTML = '' // Limpa a mensagem de erro
        
        setTimeout(() => {
            window.location.href = '../html/signin.html'
        }, 3000) // Espera 3 segundos e redireciona para a página de login
    } else {
        msgError.setAttribute('style', 'display: block') // Mostra a mensagem de erro
        msgError.innerHTML = '<strong> Preencha todos os campos corretamente </strong>' // Mensagem de erro
        msgSucess.setAttribute('style', 'display: none') // Esconde a mensagem de sucesso
        msgSucess.innerHTML = '' // Limpa a mensagem de sucesso
    }
}
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
// Fazendo enter cadastrar
let confSenhaInput = document.querySelector('#confsenha') // Seleciona o campo de confirmação de senha
confSenhaInput.addEventListener('keydown', function(e) { // Adiciona o evento de pressionar tecla
    if (e.key === 'Enter') { // Detecta se enter foi apertado
        e.preventDefault() // Impede a função original
        cadastrar() // Clica em 'Cadastrar'
    }
})
// Criando mensagens de erro e sucesso
let msgError = document.querySelector('#msgError') // Mensagem de erro
let msgSucess = document.querySelector('#msgSucess') // Mensagem de sucesso
// Botão de visualizar a senha
let botao = document.querySelector('#verSenha')
let botaoConfirm = document.querySelector('#verConfirmSenha')
botao.addEventListener('click', function() {
    let inputSenha = document.querySelector('#senha') // Seleciona o campo de senha
    
    if (inputSenha.getAttribute('type') == 'password') { // Verifica se o tipo do campo é senha
        inputSenha.setAttribute('type', 'text') // Se for, muda para texto
    } else {
        inputSenha.setAttribute('type', 'password') // Se não for, muda para senha
    }
})
// Botão de visualizar a confirmação de senha
botaoConfirm.addEventListener('click', function() {
    let inputConfirmSenha = document.querySelector('#confsenha') // Seleciona o campo de confirmação de senha
    
    if (inputConfirmSenha.getAttribute('type') == 'password') { // Verifica se o tipo do campo é senha
        inputConfirmSenha.setAttribute('type', 'text') // Se for, muda para texto
    } else {
        inputConfirmSenha.setAttribute('type', 'password') // Se não for, muda para senha
    }
})