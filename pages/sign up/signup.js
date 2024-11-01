document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
 
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (firstName&&lastName&&email&&password) {
        window.location.href ="../../index.htm"
        alert("login successfull")
    }


    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);

    alert("Form data logged in console!");
});