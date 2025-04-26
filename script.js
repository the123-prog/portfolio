// Interactivity for the contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple form validation
  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset(); // Reset the form
  } else {
    alert('Please fill out all fields.');
  }
});