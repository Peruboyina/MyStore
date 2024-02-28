const forgetForm = document.getElementById('forgetForm');
const messageDiv = document.getElementById('message');

forgetForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;

  // Here you would typically send the email to a server for processing
  // For this example, we'll just simulate a successful request
  simulateForgetRequest(email);
});

function simulateForgetRequest(email) {
  // Simulate sending the email and getting a response
  setTimeout(function() {
    const success = Math.random() < 0.5; // Simulate success 50% of the time

    if (success) {
      showMessage('success', 'Password reset email sent successfully.');
    } else {
      showMessage('error', 'Sorry, something went wrong. Please try again later.');
    }
  }, 1000);
}

function showMessage(type, text) {
  messageDiv.textContent = text;
  messageDiv.className = `message ${type}`;
}
