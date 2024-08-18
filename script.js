document.addEventListener("DOMContentLoaded", function() {
    // Function to handle form submission
    document.getElementById("appointment-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Display confirmation message
        const confirmationMessage = document.getElementById("confirmation-message");
        confirmationMessage.style.display = "block";
        
        // Optionally, you can add code here to submit the form data to a server
        // For now, we're just displaying the confirmation message
    });
});
