let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let token = localStorage.getItem('token');
let msgError = document.querySelector('#msgError');
let censura = document.querySelector('.censura');
let colunalado = document.querySelector('.coluna-lado');
let burgao = document.querySelector('.burgao');
let btnlogin = document.getElementById("btnlogin");
let autoplayEnabled = true;
let permisao = false;
let touchStartX = 0;
let touchEndX = 0;

if (userLogado && (userLogado.plano === "Basico" || userLogado.plano === "Pro")) {
    permisao = true;
}

function showSection(sectionId) {
    document.querySelectorAll('#main-content > section').forEach(sec => {
        sec.style.display = 'none';
    });
    const section = document.getElementById(sectionId);
    if (section) section.style.display = 'block';
}

const originalshowSection = showSection;
showSection = function(sectionId) {
    originalshowSection(sectionId);
    autoplayAudiosInSection(sectionId);
};

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("desativar-autoplay");
    if (btn) {
        btn.addEventListener("click", function() {
            autoplayEnabled = !autoplayEnabled;
            btn.textContent = autoplayEnabled ? "Desativar Leitura Automática" : "Ativar Leitura Automática";
        });
    }
});

function getNextSectionId(currentId) {
    const sections = Array.from(document.querySelectorAll('#main-content > section'));
    const idx = sections.findIndex(sec => sec.id === currentId);
    if (idx !== -1 && idx < sections.length - 1) {
        return sections[idx + 1].id;
    }
    return null;
}

document.addEventListener("DOMContentLoaded", () => { // Conecta o id do nav com o id da main
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
        "btn-caderno9": "caderno9",
        "btn-caderno10": "caderno10",
        "btn-caderno11": "caderno11",
        "btn-caderno12": "caderno12",
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
        if (permisao == true) {
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
    autoplayAudiosInSection("home");
});

function autoplayAudiosInSection(sectionId) {
    // Desativando o autoplay
    if (!autoplayEnabled) return;
    // Pause todos os áudios
    document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    // Seleciona os áudios da Section visível
    const section = document.getElementById(sectionId);
    if (!section) return;
    const audios = Array.from(section.querySelectorAll('audio'));
    if (audios.length === 0) return;

    // Aciona o próximo áudio automaticamente
    function playNextAudio(index) {
        if (index >= audios.length) {
            // Se for o último áudio, troca de caderno
            const nextSectionId = getNextSectionId(sectionId);
            if (nextSectionId) {
            setTimeout(() => {
                showSection(nextSectionId);
            }, 3000);
        }}
        audios[index].play();
        audios[index].onended = () => playNextAudio(index + 1);
    }

    playNextAudio(0);
}

document.getElementById("id-censura").addEventListener("click", () => {
    censura.classList.add('hidden');
    colunalado.classList.remove('active');
    burgao.classList.remove('fixed');
});

function hideError() {
    msgError.classList.add('hidden');
}

if (token) {
    atualizarbotoes()
} else {
    atualizarbotoes()
}

function login() {
    let token = localStorage.getItem('token');
    if (token) {
        localStorage.removeItem('token')
        localStorage.removeItem('userLogado')
        atualizarbotoes();
        window.location.href = './index.html'
    } else { 
        window.location.href = './Assets/html/signin.html';
}}

function register() {
    window.location.href = './Assets/html/signup.html';
}

function atualizarbotoes() {
    let token = localStorage.getItem('token');
    let userLogado = JSON.parse(localStorage.getItem('userLogado'));
    if (token && userLogado && userLogado.plano === "Pro") {
        btnregister.classList.add('hidden');
        btnlogin.innerHTML = ' Sair ';
    } else if (token && userLogado && userLogado.plano === "Basico") {
        btnregister.innerHTML = 'Upgrade ';
        btnregister.classList.remove('hidden');
        btnlogin.innerHTML = ' Sair ';
    } else if (token && userLogado && userLogado.plano === "Gratuito") {
        btnregister.innerHTML = 'Assinar ';
        btnregister.classList.remove('hidden');
        btnlogin.innerHTML = ' Sair ';
    } else {
        btnregister.innerHTML = 'Registrar ';
        btnregister.classList.remove('hidden');
        btnlogin.innerHTML = ' Login ';
    }
}

function menu() {
    censura.classList.toggle('hidden');
    colunalado.classList.toggle('active');
    burgao.classList.toggle('fixed');
}

document.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    arrastado();
}, false);

function arrastado() {
    if (touchEndX - touchStartX > 100) {
        censura.classList.remove('hidden');
        colunalado.classList.add('active');
        burgao.classList.toggle('fixed');
    }
}

document.getElementById("id-censura").addEventListener("click", () => {
    censura.classList.add('hidden');
    colunalado.classList.remove('active');
    burgao.classList.remove('fixed');
});

function showSection(sectionId) {
    // Pausa quando muda de Section
    document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    document.querySelectorAll('#main-content > section').forEach(sec => {
        sec.style.display = 'none';
    });
    const section = document.getElementById(sectionId);
    if (section) section.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-search").addEventListener("click", function() {
        const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
        if (!searchTerm) return;

        // Remove previous highlights
        document.querySelectorAll('.highlight-search').forEach(el => {
            el.outerHTML = el.innerText;
        });

        let found = false;
        // Pesquisa na Section visível
        document.querySelectorAll('#main-content > section').forEach(section => {
            if (section.style.display !== "none") {
                section.querySelectorAll("p, h2, h3, h4, h5, h6").forEach(el => {
                    const text = el.innerHTML;
                    // Marca a palavra procurada
                    const regex = new RegExp(`(${searchTerm})`, 'gi');
                    if (regex.test(text)) {
                        found = true;
                        el.innerHTML = text.replace(regex, `<span class="highlight-search" style="background:yellow">$1</span>`);
                    }
                });
            }
        });

        if (!found) {
            alert("Nenhum resultado encontrado.");
        }
    });

    // Enter para pesquisar
    document.getElementById("searchInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            document.getElementById("btn-search").click();
        }
    });
});