script.js

    document.getElementById('response').textContent = "Please fill out all fields.";// JavaScript to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Check if all fields are filled
  if (name && email && message) {
    document.getElementById('response').textContent = "Thank you for your message!";
    document.getElementById('response').style.color = "green";
  } else {
    document.getElementById('response').textContent = "Please fill out all fields.";
    document.getElementById('response').style.color = "red";
  }
});