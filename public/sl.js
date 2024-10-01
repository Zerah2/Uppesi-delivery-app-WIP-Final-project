document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Login Successful!');
        });
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Registration Successful!');
        });
    }
});
