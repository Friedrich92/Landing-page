const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const submit = document.querySelector('input[type="submit"]');

function validate(address, pass){
    const regExpMail = new RegExp('[a-z, A-Z, 0-9]+@[a-z, A-Z, 0-9]+\\.[a-z, A-Z]+');
    const regExpPass = new RegExp('[a-z, A-Z, 0-9,_]+');

    if (!regExpMail.test(address) && regExpPass.test(pass)){
        alert('Заполненные данные неверны!')
    } else if (email.value == '' || password.value == ''){
        alert('Пожалуйста, заполните поля')
    } else {
        alert('Ваши данные успешно отправлены');
    }
    
    email.value = '';
    password.value = '';
}

submit.addEventListener('click', (event) => {
    event.preventDefault();
    validate(email.value, password.value);
})