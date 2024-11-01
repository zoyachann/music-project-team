
const form = document.getElementById("signup-form");
form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Email:", email);
    console.log("Password:", password);

    // Display success message
    const successAlert = document.getElementById("loginSuccessAlert");
    successAlert.classList.remove("d-none"); 
});