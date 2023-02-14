/*Объявление переменных*/
const form = document.getElementById('form');
const Login = document.getElementById('Login');
const Email = document.getElementById('Email');
const Number = document.getElementById('Number');
const Password = document.getElementById('Password');
const Repeat_Password = document.getElementById('Repeat_Password');

form.addEventListener('submit', (elem) => {
    elem.preventDefault();
    
    ValidateInputs();
});


const SetError = (element,message) => {
    const InputControl = Element.parentElement;
    const errorDisplay = InputControl.quearySelector('error');
}

const setSucces = (element,message) => {
    
}




// Поля об ошибках 

Login.addEventListener("input", function(event) {
    if (Login.validity.typeMismath) {
        Login.setCustomValidity("error type Login");
    } else {
        Login.setCustomValidity ("");
    }
});

Email.addEventListener("input", function(event) {
    if (Email.validity.typeMismath) {
        Email.setCustomValidity ("error type Email");
    } else {
        Email.setCustomValidity ("");

    }
});

Number.addEventListener("input", function(event) {
    if (Number.validity.typeMismath) {
        Number.setCustomValidity("error type Number")       
    } else {
        Number.setCustomValidity("");
    }
});


