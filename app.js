/* variables */

const btnSend = document.querySelector('#send');

// Variables for input - email, subject and message
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');

function eventListeners() {
    // when the app starts
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //form fields
    email.addEventListener('blur', validateForm);
    subject.addEventListener('blur', validateForm );
    message.addEventListener('blur', validateForm);
}




// Funciones
function iniciarApp() {
    btnSend.disabled = true;
    btnSend.classList.add('bad');
} // before validation

// validate form
function validateForm(b) {
    if(b.target.value.length > 1) {
        console.log('si hay algo');
    } else {
        console.log('No hay nada');
    }
}

