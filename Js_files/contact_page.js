document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name === '' || email === '' || message === '') {
        showMessage('Please fill in all fields', 'error');
        return;
    }

    // Simulate sending message
    setTimeout(() => {
        showMessage('Your message has been sent successfully', 'success');
        clearForm();
    }, 1000);
});

function showMessage(msg, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = msg;
    formMessage.className = `form-message ${type}`;
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}
