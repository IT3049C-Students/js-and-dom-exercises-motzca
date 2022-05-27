// 🤖: create 2 constants with references to the password input and the reveal button from the DOM
const passwordInput = document.getElementById('#password');
const revelButton = document.getElementById('#togglePassword');

// 🤖: Create an Event Listener on the password reveal button
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.
passwordReveal.addEventListener('click', function (e) {
	if (passwordInput.type == 'password'){
		passwordInput.type = 'text';
		this.classList.toggle('bi bi-eye-slash');	
	}
	else{
		passwordInput.type = 'password';
		this.classList.toggle('bi bi-eye-slash');
	}
});

// Provided for you - prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit',function(e){
	e.preventDefault();
});
