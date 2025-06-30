let nome_titular = document.querySelector('#nome_titular');
let label_nome_titular = document.querySelector('#label_nome_titular');
let msg_nome_titular = document.querySelector('#msg_nome_titular');
let codigo_validacao = document.querySelector('#codigo_validacao');
let label_codigo_validacao = document.querySelector('#label_codigo_validacao');
let msg_codigo_validacao = document.querySelector('#msg_codigo_validacao');
let data_validade = document.querySelector('#data_validade');
let label_data_validade = document.querySelector('#label_data_validade');
let msg_data_validade = document.querySelector('#msg_data_validade');
let n_cartao = document.querySelector('#n_cartao');
let label_n_cartao = document.querySelector('#label_n_cartao');
let numero_cpf = document.querySelector('#numero_cpf');
let label_numero_cpf = document.querySelector('#label_numero_cpf');
let numero_cpf_mp = document.querySelector('#numero_cpf_mp');
let label_numero_cpf_mp = document.querySelector('#label_numero_cpf_mp');

document.addEventListener("DOMContentLoaded", () => {
    
    const navMap = {

        "btn-cartoes": "section_cartao",
        "btn-nubank": "section_nubank",
        "btn-mercadopago": "section_mercadopago"
    };

    Object.entries(navMap).forEach(([btnId, sectionId]) => {
        document.getElementById(btnId).addEventListener("click", (event) => {
            event.preventDefault();
            showSection(sectionId);
        });
    });
});
    
function showSection(sectionClass) {
    document.querySelectorAll('.Formas section').forEach(section => {
        section.style.display = 'none';
    });
    const selected = document.querySelector('.' + sectionClass);
    if (selected) {
        selected.style.display = 'block';
}}

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

n_cartao.addEventListener('keyup', () =>{
    if (n_cartao.value.replace(/\D/g, '').length < 16) {
        label_n_cartao.style.color = 'red' // Cor da escrita caso o dado esteja errado
        label_n_cartao.innerHTML = '<strong> Cartão *Insira uma cartão válido </strong>' // Mensagem de auxilio de erro
        n_cartao.setAttribute('style', 'border-color: red') // Cor da linha em caso de erro
        validn_cartao = false // Dado negado
    } else {
        label_n_cartao.style.color = 'green' // Cor da escrita caso o dado esteja certo
        label_n_cartao.innerHTML = 'Cartão' // Categoria do dado aceito
        n_cartao.setAttribute('style', 'border-color: green') // Cor da linha em caso de acerto
        validn_cartao = true // Dado aceito
    }
})

data_validade.addEventListener('change', () => {
    if (!data_validade.value) {
        label_data_validade.style.color = 'red';
        data_validade.style.borderColor = 'red';
        msg_data_validade.textContent = 'Preencha a data de validade';
        msg_data_validade.style.color = 'red';
    } else {
        label_data_validade.style.color = 'green';
        data_validade.style.borderColor = 'green';
        msg_data_validade.textContent = 'Data válida';
        msg_data_validade.style.color = 'green';
    }
});

codigo_validacao.addEventListener('keyup', () => {
    if (codigo_validacao.value.length !== 3 || !/^\d{3}$/.test(codigo_validacao.value)) {
        label_codigo_validacao.style.color = 'red';
        codigo_validacao.style.borderColor = 'red';
        msg_codigo_validacao.textContent = 'CVC deve ter 3 dígitos';
        msg_codigo_validacao.style.color = 'red';
    } else {
        label_codigo_validacao.style.color = 'green';
        codigo_validacao.style.borderColor = 'green';
        msg_codigo_validacao.textContent = 'CVC válido';
        msg_codigo_validacao.style.color = 'green';
    }
});

nome_titular.addEventListener('keyup', () => {
    if (nome_titular.value.length < 3) {
        label_nome_titular.style.color = 'red';
        nome_titular.style.borderColor = 'red';
        msg_nome_titular.textContent = 'Nome deve ter pelo menos 3 letras';
        msg_nome_titular.style.color = 'red';
    } else {
        label_nome_titular.style.color = 'green';
        nome_titular.style.borderColor = 'green';
        msg_nome_titular.textContent = 'Nome válido';
        msg_nome_titular.style.color = 'green';
    }
});

numero_cpf.addEventListener('keyup', () =>{
    const cpfValue = numero_cpf.value.replace(/\D/g, '');
    if (cpfValue.length !== 11) {
        label_numero_cpf.style.color = 'red' // Cor da escrita caso o dado esteja errado
        label_numero_cpf.innerHTML = '<strong> CPF *Insira uma CPF válido </strong>' // Mensagem de auxilio de erro
        numero_cpf.setAttribute('style', 'border-color: red') // Cor da linha em caso de erro
        validn_cpf = false // Dado negado
    } else {
        label_numero_cpf.style.color = 'green' // Cor da escrita caso o dado esteja certo
        label_numero_cpf.innerHTML = 'CPF' // Categoria do dado aceito
        numero_cpf.setAttribute('style', 'border-color: green') // Cor da linha em caso de acerto
        validn_cpf = true // Dado aceito
    }
})

numero_cpf_mp.addEventListener('keyup', () =>{
    const cpfValue = numero_cpf.value.replace(/\D/g, '');
    if (cpfValue.length !== 11) {
        label_numero_cpf_mp.style.color = 'red' // Cor da escrita caso o dado esteja errado
        label_numero_cpf_mp.innerHTML = '<strong> CPF *Insira uma CPF válido </strong>' // Mensagem de auxilio de erro
        numero_cpf_mp.setAttribute('style', 'border-color: red') // Cor da linha em caso de erro
        validn_cpf_mp = false // Dado negado
    } else {
        label_numero_cpf_mp.style.color = 'green' // Cor da escrita caso o dado esteja certo
        label_numero_cpf_mp.innerHTML = 'CPF' // Categoria do dado aceito
        numero_cpf_mp.setAttribute('style', 'border-color: green') // Cor da linha em caso de acerto
        validn_cpf_mp = true // Dado aceito
    }
})