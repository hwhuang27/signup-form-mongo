const myForm = document.querySelector('#my-form');

const firstName = document.querySelector('#FirstName');
const firstError = document.querySelector('#fn-error');

const lastName = document.querySelector('#LastName');
const lastError = document.querySelector('#ln-error');

const email = document.querySelector('#Email');
const emailError = document.querySelector('#email-error');

const password = document.querySelector('#Password');
const pwError = document.querySelector('#pw-error');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (firstName.value === '') {
        firstError.innerHTML = 'First Name cannot be empty';
        firstError.style.display = 'block';
        firstName.style.border = '2px solid hsl(0, 100%, 74%)';
        firstName.placeholder = '';
        
        setTimeout(() => {
            firstError.style.display = 'none';
            firstName.style.border = '1px solid hsl(249, 10%, 26%)';
            firstName.placeholder = 'First Name';
        }, 3000);

    };

    if (lastName.value === '') {
        lastError.innerHTML = 'Last Name cannot be empty';
        lastError.style.display = 'block';
        lastName.style.border = '2px solid hsl(0, 100%, 74%)';
        lastName.placeholder = '';

        setTimeout(() => {
            lastError.style.display = 'none';
            lastName.style.border = '0.5px solid hsl(249, 10%, 26%)';
            lastName.placeholder = 'Last Name';
        }, 3000);
    };

    if (email.value === '') {
        emailError.innerHTML = 'Looks like this is not an email';
        emailError.style.display = 'block';
        email.style.border = '2px solid hsl(0, 100%, 74%)';
        email.placeholder = 'email@example.com';
        email.style.setProperty("--c", "hsl(0, 100%, 74%)");

        setTimeout(() => {
            emailError.style.display = 'none';
            email.style.border = '0.5px solid hsl(249, 10%, 26%)';
            email.placeholder = 'Email Address';
            email.style.setProperty("--c", "dimgray");
        }, 3000);
    };
    if (password.value === '') {
        pwError.innerHTML = 'Password cannot be empty';
        pwError.style.display = 'block';
        password.style.border = '2px solid hsl(0, 100%, 74%)';
        password.placeholder = '';

        setTimeout(() => {
            pwError.style.display = 'none';
            password.style.border = '0.5px solid hsl(249, 10%, 26%)';
            password.placeholder = 'Password';
        }, 3000);
    };

}


