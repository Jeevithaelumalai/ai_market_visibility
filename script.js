// frontend/script.js
async function register() {
    try {
        const username = document.getElementById('register-username').value.trim();
        const password = document.getElementById('register-password').value.trim();

        if (!username || !password) {
            alert('Please fill in both username and password');
            return;
        }

        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (data.success) {
            alert(data.message);
            // Clear the input fields
            document.getElementById('register-username').value = '';
            document.getElementById('register-password').value = '';
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error(error);
        alert('An error occurred. Please try again.');
    }
}

async function login() {
    try {
        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value.trim();

        if (!username || !password) {
            alert('Please fill in both username and password');
            return;
        }

        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (data.success) {
            alert(data.message);
            // You can redirect the user to a protected page here
            // window.location.href = '/protected';
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error(error);
        alert('An error occurred. Please try again.');
    }
}