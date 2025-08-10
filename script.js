document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const isValid = true;
    const messages = [];

    // username validation
    if (username.lenght === 3) {
      isValid = false;
      messages.push("Username must be more than 3 characters!");
    }

    // email validation
    if (!(email.includes("@") && email.includes("."))) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

    // password validation
    if (password.lenght < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      // Join the messages with a <br> tag for a new line
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
      feedbackDiv.style.backgroundColor = "#f8d7da";
    }
  });
});
