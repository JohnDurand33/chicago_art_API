let isLoggedIn = false;

function toggleLogin() {
    isLoggedIn = !isLoggedIn;
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signup');
    const h2Tag = document.querySelector('h2')
    
    if (isLoggedIn) {
        loginButton.textContent = 'Logout';
        signupButton.style.display = 'none';
        h2Tag.style.paddingRight = '73px';
    } else {
        loginButton.textContent = 'Login';
        signupButton.style.display = 'inline';
        h2Tag.style.paddingRight = '0px';
    }
    
const clickedEvent = async () => {
    
};