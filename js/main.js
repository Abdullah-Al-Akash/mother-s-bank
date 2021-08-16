//Get Login Button and Login System:
document.getElementById('login-btn').addEventListener('click', function () {
        const emailField = document.getElementById('email-id');
        const emailId = emailField.value;
        console.log(emailId);

        const passwordField = document.getElementById('password');
        const password = passwordField.value;
        console.log(password);

        //Password Validation and Login:
        if (emailId == 'abc@gmail.com' && password == 'abc') {
                window.location.href = 'banking.html';
        }
        else {
                const error = document.getElementById('error');
                error.innerText = 'Invalid Email or Password'
        }
})