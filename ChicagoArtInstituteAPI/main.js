let isLoggedIn = false;

function toggleLogin() {
    isLoggedIn = !isLoggedIn;
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signup');
    
    if (isLoggedIn) {
        loginButton.textContent = 'Logout';
        signupButton.style.display = 'none';
    } else {
        loginButton.textContent = 'Login';
        signupButton.style.display = 'inline';
    }
}