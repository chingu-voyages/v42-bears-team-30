
 const btnClose = document.getElementById('btn-alert-close')

const errors  = document.getElementById('errors');


// btnClose.addEventListener('click',(e) => {
//     e.preventDefault();
//     console.log('click')
//     btnClose.parentElement.remove();
//     console.log('parent', btnClose.parentElement)
// })


// for (let i = 0; i < btnClose.length; i++) {
//     btnClose[i].addEventListener("click", function() {
//         let errorMsg = this.parentNode;
//         errorMsg.parentNode.removeChild(errorMsg);
//     });
// }

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

