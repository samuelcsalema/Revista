let msgError = document.querySelector('#msgError'); // Mensagem de erro
let censura = document.querySelector('.censura');
let token = false
let colunalado = document.querySelector('.coluna-lado');
let burgao = document.querySelector('.burgao');

//if(localStorage.getItem('token') == null){
//  alert('Você precisa estar logado para acessar essa página')
//  window.location.href = './Assets/html/signin.html'
//}

let userLogado = JSON.parse(localStorage.getItem('userLogado')) 
let logado = document.querySelector('#logado')

document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("main-content");

    // Conteúdo de cada botão
    const content = {
        home: `
            <section id="home">
                <h2> Bem-vindo ao Viva Letras! </h2>
                <p> Explore o mundo da literatura e descubra novas histórias. </p>
            </section>
            `,
        caderno1: `
            <section id="caderno1">
                <h2> Título do caderno 1 </h2>
                <p> Este é o conteúdo do primeiro caderno. </p>
            </section >
            `,
        caderno2: `
            <section id="caderno2" >
                <h2> Título do caderno 2 </h2>
                <p> Este é o conteúdo do segundo caderno. </p>
            </section>
            `,
        caderno3: `
            <section id="caderno3">
                <h2> Título do caderno 3 </h2>
                <p> Este é o conteúdo do terceiro caderno. </p>
            </section>
                `,
        caderno4: `
            <section id="caderno4">
                <h2> Educação Especial: Uma Responsabilidade de Inclusão </h2>
                <h3 id="resumo"> Veja adiante uma obra literaria produzida pelo artista contemporâneo de renome nacional PABLO VITTAR. </h3>
                <h5 id="autores"> Por: <h12 id="nomes-autores"> Ana Clara, Lauana, Laura e Keylana </h12> </h5>
                <p id="texto"> Eu já sabia
                    Que ia dar problema
                    Desde a primeira vez
                    Que te encontrei

                    Com esse jeito de olhar
                    Já era
                    Foi me conquistando
                    Me deixando sem ar

                    [Pabllo Vittar]
                    Não sei, mas tenho medo
                    Do que posso sentir
                    Eu sei, mas tô querendo
                    Mesmo assim me iludir

                    E se for pra sofrer
                    Quero sofrer gostoso
                    Com esse teu corpo
                    Sensual, maravilhoso </p>
            </section>
                    `,
        caderno5: `
            <section id="caderno5">
                <h2> Título do caderno 5 </h2>
                <p> Este é o conteúdo do quinto caderno. </p>
            </section>
                `,
        caderno6: `
            <section id="caderno6">
                <h2> Título do caderno 6 </h2>
                <p> Este é o conteúdo do sexto caderno. </p>
            </section>
                `,
        caderno7: `
            <section id="caderno7">
                <h2> Título do caderno 7 </h2>
                <p> Este é o conteúdo do sétimo caderno. </p>
            </section>
                `,
        caderno8: `
            <section id="caderno8">
                <h2> Título do caderno 8 </h2>
                <p> Este é o conteúdo do oitavo caderno. </p>
            </section>
                `,
        sobre: `
            <section id="sobre">
            <h2> Sobre Nós </h2>
                    <p> Olá, pessoal! Somos do primeiro período de Letras -
                    Português e Inglês da UEMG Campus Ibirité.
                    O nosso objetivo principal é trazer para você
                    espectador, notícias interessantes presentes no
                    mundo educacional como futuros docentes!. </p>
            </section >
                `,
        contato: `
            <section id="contato">
            <h2> Contato </h2>
                <p> @vivaletrasuemg </p>
            </section>
            `,
        pago: `
            <section id="pago">
                <h2> Extra </h2>
                <p> Conteúdo da área apenas para assinantes. </p>
            </section>
        `,
        error: `
            <section id="error">
            </section>
        `
    };

    // Botões pra mudar o conteúdo da página inicial
document.getElementById("btn-home").addEventListener("click", (event) => {
    event.preventDefault();
    hideError(); // Esconde a mensagem de erro
    menu(); // Chama a função menu para mostrar a censura e a coluna ao lado // Esconde a mensagem de erro
    mainContent.innerHTML = content.home;
});

document.getElementById("btn-caderno1").addEventListener("click", (event) => {
    event.preventDefault();
    hideError(); // Esconde a mensagem de erro
    menu(); // Chama a função menu para mostrar a censura e a coluna ao lado // Esconde a mensagem de erro
    mainContent.innerHTML = content.caderno1;
});

document.getElementById("btn-caderno2").addEventListener("click", (event) => {
    event.preventDefault();
    hideError(); // Esconde a mensagem de erro
    menu(); // Chama a função menu para mostrar a censura e a coluna ao lado // Esconde a mensagem de erro
    mainContent.innerHTML = content.caderno2;
});

document.getElementById("btn-caderno3").addEventListener("click", (event) => {
    event.preventDefault();
    hideError(); // Esconde a mensagem de erro
    menu(); // Chama a função menu para mostrar a censura e a coluna ao lado
    mainContent.innerHTML = content.caderno3;
});

document.getElementById("btn-caderno4").addEventListener("click", (event) => {
    event.preventDefault();
    hideError(); // Esconde a mensagem de erro
    menu(); // Chama a função menu para mostrar a censura e a coluna ao lado
    mainContent.innerHTML = content.caderno4;
});

document.getElementById("btn-caderno5").addEventListener("click", (event) => {
     event.preventDefault();
     hideError(); // Esconde a mensagem de erro
    menu(); // Chama a função menu para mostrar a censura e a coluna ao lado
     mainContent.innerHTML = content.caderno5;
});

document.getElementById("btn-caderno6").addEventListener("click", (event) => {
     event.preventDefault();
     hideError(); // Esconde a mensagem de erro
    menu(); // Chama a função menu para mostrar a censura e a coluna ao lado
     mainContent.innerHTML = content.caderno6;
});

document.getElementById("btn-caderno7").addEventListener("click", (event) => {
    event.preventDefault();
    hideError(); // Esconde a mensagem de erro
    menu(); // Chama a função menu para mostrar a censura e a coluna ao lado
    mainContent.innerHTML = content.caderno7;
});

document.getElementById("btn-caderno8").addEventListener("click", (event) => {
    event.preventDefault();
    hideError(); // Esconde a mensagem de erro
    menu(); // Chama a função menu para mostrar a censura e a coluna ao lado
    mainContent.innerHTML = content.caderno8;
});

document.getElementById("btn-sobre").addEventListener("click", (event) => {
    event.preventDefault();
    hideError(); // Esconde a mensagem de erro
    menu(); // Chama a função menu para mostrar a censura e a coluna ao lado
    mainContent.innerHTML = content.sobre;
});

document.getElementById("btn-contato").addEventListener("click", (event) => {
    event.preventDefault(); // Previne o comportamento padrão do botão
    hideError(); // Esconde a mensagem de erro
    menu(); // Chama a função menu para mostrar a censura e a coluna ao lado
    mainContent.innerHTML = content.contato; //

});

document.getElementById("btn-pago").addEventListener("click", (event) => {
    event.preventDefault();
    if (token == true) {
        hideError(); // Esconde a mensagem de erro
        menu(); // Chama a função menu para mostrar a censura e a coluna ao lado
        mainContent.innerHTML = content.pago;
    } else {
        msgError.classList.remove('hidden');
        msgError.innerHTML = '<strong> Você precisa estar logado para acessar essa área </strong>' // Mensagem de erro
        mainContent.innerHTML = content.error;
        menu(); // Chama a função menu para mostrar a censura e a coluna ao lado
    }
});
});

document.getElementById("id-censura").addEventListener("click", () => {
    censura.classList.add('hidden');
    colunalado.classList.add('hidden');
    burgao.classList.remove('fixed');
});

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("btn-search").addEventListener("click", function() {
        const searchTerm = document.getElementById("searchInput").value.trim();
        if (searchTerm) {
            alert("Trabalhando nisso, mas você pesquisou por: " + searchTerm);
            // Aqui você pode chamar sua função de busca real
        }
    });

    // Opcional: permitir Enter para pesquisar
    document.getElementById("searchInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            document.getElementById("btn-search").click();
        }
    });
});

function hideError() {
    msgError.classList.add('hidden');
}

function login() {
    window.location.href = './Assets/html/signin.html'; // Redireciona para a página de login
}
function register() {
    window.location.href = './Assets/html/signup.html'; // Redireciona para a página de registro
}

function menu() {
    let censura = document.querySelector('.censura');
    let colunalado = document.querySelector('.coluna-lado');
    censura.classList.toggle('hidden');
    colunalado.classList.toggle('hidden');
    burgao.classList.toggle('fixed');
}

//function sair(){
  // Remove o token e os dados do usuário logado do localStorage
//  localStorage.removeItem('token')
  // Remove o usuário logado do localStorage
//  localStorage.removeItem('userLogado')
  // Redireciona para a página de login
//  window.location.href = '../html/signin.html'
//}