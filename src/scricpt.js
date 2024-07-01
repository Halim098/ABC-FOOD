document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      event.preventDefault();
      alert("All fields are required!");
    } else if (!validateEmail(email)) {
      event.preventDefault();
      alert("Please enter a valid email address!");
    }
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
