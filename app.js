// Variables
const form = document.getElementById('send-email');
const inputs = document.querySelectorAll('#send-email input, textarea')


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.

}

inputs.forEach((input, textarea) => {
    inp
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
});



















/* variables */
/*
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

*/