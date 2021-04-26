const form = document.getElementById('form');


const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit' , (e) => {
    e.preventDefault();

    checkInputs();

    
    
    isCreated();

});


function checkInputs() {

    //get the values from the imputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank!');
    } else {
        setSuccesFor(username);
    }

   


    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccesFor(email);
	}

    


    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank!');
    } else {
        setSuccesFor(password);
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Passwords cannot be blank!');
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Password Check dosen\'t match');
    } else {
        setSuccesFor(password2);
    }



}


function isCreated() {
    const element = document.querySelectorAll(".form-control");
    var i;
    var succes = 1;
    var length = element.length;
    for (i = 0; i < length; i++) {
     if(!element[i].classList.contains("succes")) {
        succes = 0;
     }
    }

    if(succes == 1) {
        alert("User Created");
    }
}



function setErrorFor(input, message) {
    const formControl = input.parentElement; //form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';

}


function setSuccesFor(input){

    const formControl = input.parentElement; //form-control
    formControl.className = 'form-control succes';
}



function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}