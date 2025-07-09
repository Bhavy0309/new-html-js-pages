let username = document.getElementById('username');
let password = document.getElementById('password');
let email = document.getElementById('email');

username.addEventListener('change' ,  (event) => {
    let eventName = event.target.value
    localStorage.setItem('Username' , eventName)
});

password.addEventListener('change' ,  (event) => {
    let eventName = event.target.value
    localStorage.setItem('Password' , eventName)
});

email.addEventListener('change' ,  (event) => {
    let eventName = event.target.value
    localStorage.setItem('Email' , eventName)
});

let submit = document.getElementById('submitbn')
submit.addEventListener('click' , () => {
    window.open('login.html')
});
