// Toggle between login and signup forms
document.getElementById('show-signup').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
});

document.getElementById('show-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Simulate login process
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        // Redirect to another page or perform further actions
    } else {
        alert('Invalid username or password.');
    }
});

// Handle signup form submission
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const email = document.getElementById('signup-email').value;

    // Simulate signup process
    alert('Signup successful!');

    // Redirect to login page or perform further actions
    document.getElementById('signup-form').reset();
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});
