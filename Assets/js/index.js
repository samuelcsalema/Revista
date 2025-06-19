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
    // Conecta o id do nav com o id da main
    const navMap = {
//          Button       Section         
        "btn-home": "home",
        "btn-caderno1": "caderno1",
        "btn-caderno2": "caderno2",
        "btn-caderno3": "caderno3",
        "btn-caderno4": "caderno4",
        "btn-caderno5": "caderno5",
        "btn-caderno6": "caderno6",
        "btn-caderno7": "caderno7",
        "btn-caderno8": "caderno8",
        "btn-sobre": "sobre",
        "btn-contato": "contato"
    };
    // Olha o ID de cada botão, junta com os IDs da main e adiciona o evento de click
    Object.entries(navMap).forEach(([btnId, sectionId]) => {
        document.getElementById(btnId).addEventListener("click", (event) => {
            event.preventDefault();
            hideError();
            menu();
            showSection(sectionId);
        });
    });
    // Parte específica para pago
    document.getElementById("btn-pago").addEventListener("click", (event) => {
        event.preventDefault();
        if (token == true) {
            msgError.classList.add('hidden'); 
            menu();
            showSection("pago");
        } else {
            msgError.classList.remove('hidden');
            showSection("error");
            menu();
        }
    });
    // Define a home como padrão
    showSection("home");
});


document.getElementById("id-censura").addEventListener("click", () => {
    censura.classList.add('hidden');
    colunalado.classList.remove('active');
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
    // Enter para pesquisar
    document.getElementById("searchInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            document.getElementById("btn-search").click();
        }
    });
});

function showSection(sectionId) {
    document.querySelectorAll('#main-content > section').forEach(sec => {
        sec.style.display = 'none';
    });
    const section = document.getElementById(sectionId);
    if (section) section.style.display = 'block';
}

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
    censura.classList.toggle('hidden');
    colunalado.classList.toggle('active');
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