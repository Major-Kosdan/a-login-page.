function validate_input() {
    // Select all input fields within the form
    var username = document.querySelector('input[name="username"]').value;
    var address = document.querySelector('input[name="address"]').value;

    // Check if the fields are empty
    if (username.trim() === "") {
        alert("Username is required.");
        return false; // Prevent form submission
    }

    if (address.trim() === "") {
        alert("Address is required.");
        return false; // Prevent form submission
    }

    return true; // Allow form submission if valid
}