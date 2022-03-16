let pw1 = document.querySelector('#password');
let pw2 = document.querySelector('#confirmPassword');
function confirmPassword() {   
             
    if (pw1.value !== pw2.value) {
        pw2.setCustomValidity("Passwords don't match")
        } else {
            pw2.setCustomValidity('');
        }
    }
pw1.onchange = confirmPassword;
pw2.onkeyup = confirmPassword;