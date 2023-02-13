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



