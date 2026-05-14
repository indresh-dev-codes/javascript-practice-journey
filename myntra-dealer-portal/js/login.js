// Get elements
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");
let message = document.getElementById("message");
let showPasswordBtn = document.getElementById("showPassword");
showPasswordBtn.addEventListener("click", function () {

    if(passwordInput.type === "password"){
        passwordInput.type = "text";
        showPasswordBtn.innerText = "Hide Password";
    }
    else{
        passwordInput.type = "password";
        showPasswordBtn.innerText = "Show Password";
    }

});
loginBtn.addEventListener("click", function () {

    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;

    if(emailValue === "" || passwordValue === ""){
        message.innerText = "Please fill all fields";
        return;
    }

    if(
        emailValue === "dealer@myntra.com" &&
        passwordValue === "12345"
    ){
        message.style.color = "green";
        message.innerText = "Login Successful";

        localStorage.setItem("dealerEmail", emailValue);

        setTimeout(function () {
            window.location.href = "dashboard.html";
        }, 2000);

    } 
    else {
        message.style.color = "red";
        message.innerText = "Invalid credentials";
    }

});