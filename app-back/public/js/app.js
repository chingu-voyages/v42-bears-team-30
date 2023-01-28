// navabar



const btnClose = document.getElementById('btn-alert-close')

const errors  = document.getElementById('errors');

const errorCloseButtons = document.querySelectorAll('#btn-alert-close');
errorCloseButtons.forEach(button => {
    button.addEventListener('click', event => {
      const errorMessage = event.target.parentNode.parentNode;
      console.log('parent',errorMessage);
      errorMessage.parentNode.removeChild(errorMessage);
    });
  });

function toggleTypeInput(){
    let inputPassword = document.getElementById("password");
    let inputConfirmPassword = document.getElementById("confirm_password");
    if (inputPassword.type === "password") {
        inputPassword.type = "text";
    } else {
        inputPassword.type = "password";
    }

    if (inputConfirmPassword.type === "password") {
        inputConfirmPassword.type = "text";
    } else {
        inputConfirmPassword.type = "password";
    }
}

$(document).ready(function(){
    //sidenav
    $('.sidenav').sidenav();
    //modal 
    $('.modal').modal();
    //textArea input
    $('input#input_text, textarea#textarea2').characterCounter()

  });