// Variables

const btnSend = document.querySelector('#send');

// Variables for input - email, subject and message
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');

function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
}



// Funciones
function iniciarApp() {
    btnSend.disabled = true;
    btnSend.classList.add('bad');
} // before validation

