if (window.location.pathname.includes("signup.html")) {
    console.log("This is the Fitness Signup Page!");

    /*function saveToLocalStorage(event) {
        event.preventDefault();
        const fullname = document.getElementById('fullname').value;
        const address = document.getElementById('address').value;
        const DOB = document.getElementById('DOB').value
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        
        localStorage.setItem('fullname', fullname);
        localStorage.setItem('address', address);
        localStorage.setItem('DOB', DOB);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        
        alert('Signup details saved!');
    }

    document.getElementById("signupForm").addEventListener("submit", saveToLocalStorage);*/


    function saveToLocalStorage(event) {
        event.preventDefault();
        
        // Accessing input fields using their 'name' attributes
        const fullname = document.querySelector('input[name="fullname"]').value;
        const address = document.querySelector('input[name="address"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;
        
        // Saving form data to local storage
        localStorage.setItem('fullname', fullname);
        localStorage.setItem('address', address);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        
        alert('Signup details saved!');
    }

    // Adding event listener to the form for the submit event
    const signupForm = document.querySelector('form');
    signupForm.addEventListener("submit", saveToLocalStorage);
}

