
 const loginForm = document.getElementById('loginForm');
 const loginSuccessAlert = document.getElementById('loginSuccessAlert');

 loginForm.addEventListener('submit', function (event) {
     event.preventDefault(); 
     event.stopPropagation();

     if (loginForm.checkValidity()) {
         
         loginSuccessAlert.classList.remove('d-none');
         loginForm.reset(); 
     } else {
         loginForm.classList.add('was-validated'); 
     }
 });