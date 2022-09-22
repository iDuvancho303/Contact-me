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
                document.querySelector('#send-email .text1').classList.remove('text1-active');
                document.querySelector('#email1 i ').classList.remove('fa-times-circle');
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
            if(expresiones.nombre.test(e.target.value)){
                document.querySelector("#subject1 i").classList.remove('fa-exclamation-triangle');
                document.getElementById('subject').classList.remove('incorrect');
                document.getElementById('subject').classList.add('correct');
                document.querySelector('#subject1 i').classList.add('fa-check');
            } else {
                document.getElementById('subject').classList.add('incorrect');
            }
        
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



















