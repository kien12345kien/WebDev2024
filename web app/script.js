// script.js

function validateForm() {
    // Get the form fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    // Reset error message
    errorMessage.style.display = 'none';
    errorMessage.innerText = '';
  
    // Basic validation: check if fields are empty
    if (username === '' || password === '') {
      errorMessage.innerText = 'Both fields are required!';
      errorMessage.style.display = 'block';
      return false;
    }
  
    // Further validation could go here (e.g., password length or format)
    
    // Simulate successful login (you would replace this with actual server-side processing)
    alert('Login successful!');
    return true;
  }
  