document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById('loginForm');
  const message = document.getElementById('message');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple client-side validation (for demo purposes)
    if (username === 'user' && password === 'password') {
      message.style.color = 'green';
      message.textContent = 'Login successful!';
    } else {
      message.style.color = 'red';
      message.textContent = 'Invalid username or password';
    }
  });
});
