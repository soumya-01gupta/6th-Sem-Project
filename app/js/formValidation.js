function validateForm() {
    var name = document.getElementById('username').value;
    var email = document.getElementById('useremail').value;
    var message = document.getElementById('usertext').value;

    // Simple validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields correctly.');
        return false;
    }

    // Email validation using a simple regex pattern
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        document.getElementById('useremail').style.borderColor = 'red';
        return false;
    }

    // Reset border color to default (in case it was previously red)
    document.getElementById('useremail').style.borderColor = '';

    sendEmail();

    return false; // Prevents the form from submitting (for demonstration purposes)
}

function sendEmail() {
    try {
        alert("Thanks for contacting.");
    } catch (error) {
        console.error("Error handling sendEmail function:", error);
    }
    return false;
}