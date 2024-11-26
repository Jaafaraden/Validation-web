document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Error flags
    let hasError = false;
  
    // Name Validation
    const nameError = document.getElementById("name-error");
    if (name === "" || name.length < 3) {
      nameError.textContent = "Name must be at least 3 characters.";
      nameError.style.display = "block";
      hasError = true;
    } else {
      nameError.style.display = "none";
    }
  
    // Email Validation
    const emailError = document.getElementById("email-error");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      emailError.style.display = "block";
      hasError = true;
    } else {
      emailError.style.display = "none";
    }
  
    // Phone Number Validation
    const phoneError = document.getElementById("phone-error");
    const phonePattern = /^[0-9]{10}$/; // Example: 10-digit phone number
    if (!phonePattern.test(phone)) {
      phoneError.textContent = "Please enter a valid 10-digit phone number.";
      phoneError.style.display = "block";
      hasError = true;
    } else {
      phoneError.style.display = "none";
    }
  
    // Message Validation
    const messageError = document.getElementById("message-error");
    if (message === "") {
      messageError.textContent = "Message cannot be empty.";
      messageError.style.display = "block";
      hasError = true;
    } else {
      messageError.style.display = "none";
    }
  
    // Submit the form if no errors
    if (!hasError) {
      alert("Form submitted successfully!");
      document.getElementById("contact-form").reset();
    }
  });
  