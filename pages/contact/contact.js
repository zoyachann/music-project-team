document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    if (name && email && subject && message) {
        window.location.href = "../../index.htm"
        alert("login succesfully"
        )
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);


    document.getElementById("successAlert").classList.remove("d-none");


});