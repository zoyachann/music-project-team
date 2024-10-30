const form = document.getElementById('contactForm');
const successAlert = document.getElementById('successAlert');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    event.stopPropagation(); 

    if (form.checkValidity()) {
        successAlert.classList.remove('d-none');
        form.reset();
        form.classList.remove('was-validated');
    } else {
        form.classList.add('was-validated');
    }
});