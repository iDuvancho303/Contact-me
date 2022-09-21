// Variables
const form = document.getElementById('send-email');
const inputs = document.querySelectorAll('#send-email input, textarea')


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	/*password: /^.{4,12}$/, // 4 a 12 digitos.*/
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	/*telefono: /^\d{7,14}$/ // 7 a 14 numeros.*/

}

const validateForm = (e) => {
    switch (e.target.name) {
        case 'email':
            if(expresiones.email.test(e.target.value)){
                document.getElementById('email').classList.remove('incorrect');
                document.getElementById('email').classList.add('correct');
                document.querySelector('#email1 i').classList.remove('fa-exclamation-triangle');
                document.querySelector('#email1 i').classList.add('fa-check');
            } else {
                document.getElementById('email').classList.remove('correct');
                document.querySelector('#email1 i').classList.remove('fa-check');
                document.querySelector('#email1 i').classList.remove('fa-exclamation-triangle');
                document.getElementById('email').classList.add('incorrect');
                document.querySelector('#email1 i ').classList.add('fa-times-circle');
                document.querySelector('#send-email .text1').classList.add('text1-active');

            }
        break;
        case 'subject':
            console.log('funciona2')
        break;
        case 'comments':
            console.log('funciona3')
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm)
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