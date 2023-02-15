/*Объявление переменных*/
const form = document.getElementById('form');
const Login = document.getElementById('Login');
const Email = document.getElementById('Email');
const Number = document.getElementById('Number');
const Password = document.getElementById('Password');
const Repeat_Password = document.getElementById('Repeat_Password');

const input = document.querySelector('input');
input.addEventListener('input', oninput);

// Регулярные выражения для телефона, почты
const regEx1 = '^\+[3-7]\s\d{3}\s\d{3}\-\d{2}\-\d{2}';
const RegEx2 = '^\w+[@.]\w+@\w+\.\w{2}|^\w+@\w+\.\w{2}';

function oninput(form, Email) {
    if (isEmailValid(input.value)) {
        input.style.borderColor = 'green';
    } else {
        input.style.borderColor = 'red';
    }
}

input.addEventListener('input', oninput);
function isEmailValid(value) {
    return RegEx2.test(value);
}



// Поля  ошибки 

// Login.addEventListener("input", function(event) {
//     if (Login.validity.typeMismath) {
//         Login.setCustomValidity("error type Login");
//     } else {
//         Login.setCustomValidity ("");
//     }
// });

// Email.addEventListener("input", function(event) {
//     if (Email.validity.typeMismath) {
//         Email.setCustomValidity ("error type Email");
//     } else {
//         Email.setCustomValidity ("");

//     }
// });

// Number.addEventListener("input", function(event) {
//     if (Number.validity.typeMismath) {
//         Number.setCustomValidity("error type Number")       
//     } else {
//         Number.setCustomValidity("");
//     }
// });

// Password.addEventListener("input", function(event) {
//     if (Password.validity.typeMismath) {
//         Password.setCustomValidity("error type Number")       
//     } else {
//         Password.setCustomValidity("");
//     }
// });

// Repeat_Password.addEventListener("input", function(event) {
//     if (Repeat_Password.validity.typeMismath) {
//         Repeat_Password.setCustomValidity("error type Number")       
//     } else {
//         Repeat_Password.setCustomValidity("");
//     }
// });


