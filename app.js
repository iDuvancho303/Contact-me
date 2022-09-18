// Variables

const btnSend = document.querySelector('#send');

function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
}



// Funciones
function iniciarApp() {
    btnSend.disabled = true;
    btnSend.classList.add('bad');
}