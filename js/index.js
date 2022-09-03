let login = document.getElementById('login');
let close = document.getElementById('close');
let modal = document.getElementById('modal')
login.addEventListener('click' , function () {
    modal.style.display = 'block';
})
close.addEventListener('click' , function () {
    modal.style.display = 'none';
})

let signup = document.getElementById('signup');
let closemodal = document.getElementById('closemodal');
let signmodal = document.getElementById('signmodal')
signup.addEventListener('click' , function () {
    signmodal.style.display = 'block';
})
closemodal.addEventListener('click' , function () {
    signmodal.style.display = 'none';
})