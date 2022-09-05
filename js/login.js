document.getElementById('login-btn').addEventListener('click', function () {

    //User email

    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //user pass

    const passwoardField = document.getElementById('user-pass');
    const userPasswoard = passwoardField.value;

    if (userEmail == 'faruk@gmail.com' && userPasswoard == 'amifaruk') {
        window.location.href = 'banking.html';
    }
})
