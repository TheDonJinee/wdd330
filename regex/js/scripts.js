const fullName = document.querySelector('#fname');
const phone = document.querySelector('#phone');
const whatsapp = document.querySelector('#whatsapp');
const password = document.querySelector('#pword');


fullName.addEventListener('blur', checkName)
phone.addEventListener('blur', checkPhone)
password.addEventListener('blur', checkPassword)

function checkName() {
    const regEx_fname = /^[a-zA-Z]{2,20}( )[a-zA-Z]{2,20}(( )[a-zA-Z]{2,20})?$/;
    if(!regEx_fname.test(fullName.value)) {
        notValid(fullName)
    } else {
        isValid(fullName)

    }
}

function checkPhone() {
    const regex_phone = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    if (!regex_phone.test(phone.value)) {
        notValid(phone)
        // console.log('Not valid')
    } else {
        isValid(phone)
        // console.log('Valid')
    }
}

function checkPassword() {
    const regEx_pword = /^([a-zA-Z0-9]){10}$/;
    if(!regEx_pword.test(password.value)) {
        notValid(password)
    } else {
        isValid(password)

    }
}

function isValid(value) {
    value.classList.remove('invalid')
    value.classList.add('valid')
}

function notValid(value) {
    value.classList.add('invalid');
    value.classList.remove('valid');
}