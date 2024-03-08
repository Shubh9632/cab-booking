document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;
        
        fetch('https://cab-booking2-3tgh.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (response.ok) {
                console.log('Login successful');
                window.location.href = 'dashboard.html';
            } else {
                console.error('Login failed');
                // Here you can show an error message to the user
            }
        })
        .catch(error => console.error('Error:', error));
    });

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("signupUsername").value;
        const password = document.getElementById("signupPassword").value;
        
        fetch('https://cab-booking2-3tgh.onrender.com/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (response.ok) {
                console.log('Signup successful');
                window.location.href = 'dashboard.html';
            } else {
                console.error('Signup failed');
                // Here you can show an error message to the user
            }
        })
        .catch(error => console.error('Error:', error));
    });
});


