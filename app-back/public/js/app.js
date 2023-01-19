const btnClose = document.getElementById('btn-alert-close');
const errorMessageAlert = document.getElementById('error-msg'); 
btnClose.addEventListener('click',(e) => {
    e.preventDefault();
    errorMessageAlert.remove();
})