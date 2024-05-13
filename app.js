
const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const uname = document.querySelector('#uname');
    const email = document.querySelector('#email');
    const pass = document.querySelector('#password');
    const confirmPass = document.querySelector('#confirm-password');
    
    const usernameError = document.querySelector('#usernameError');
    const emailError = document.querySelector('#emailError');
    const passwordError = document.querySelector('#passwordError');
    const passError = document.querySelector('#passError');
    
    let isValid = true; // Assume the form is valid by default

    if (uname.value === '') {
        usernameError.innerHTML = "* must be filled";
        isValid = false; // Set isValid to false if any field is empty
    } else {
        usernameError.innerHTML = "";
    }

    if (email.value === '') {
        emailError.innerHTML = "* must be filled";
        isValid = false; // Set isValid to false if any field is empty
    } else {
        emailError.innerHTML = "";
    }

    if (pass.value === '') {
        passwordError.innerHTML = "* must be filled";
        isValid = false; // Set isValid to false if any field is empty
    } else {
        passwordError.innerHTML = "";
    }

    if (confirmPass.value === '') {
        passError.innerHTML = "* must be filled";
        isValid = false; // Set isValid to false if any field is empty
    } else {
        passError.innerHTML = "";
    }

    if (isValid) {
        form.submit(); // Submit the form only if all fields are filled
    }
});


    