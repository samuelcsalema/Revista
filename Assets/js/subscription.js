document.addEventListener("DOMContentLoaded", () => {
    
    const navMap = {

        "btn-cartoes": "section_cartao",
        "btn-nubank": "section_nubank",
        "btn-picpay": "section_picpay",
        "btn-pix": "section_pix",
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