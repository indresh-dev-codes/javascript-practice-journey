// Selecting elements
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");
let message = document.getElementById("message");
let showPasswordBtn = document.getElementById("showPassword");
let forgotBtn = document.getElementById("forgotBtn");


// Show/Hide Password
showPasswordBtn.addEventListener("click", function () {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordBtn.innerText = "Hide Password";
    } 
    else {
        passwordInput.type = "password";
        showPasswordBtn.innerText = "Show Password";
    }

});


// Login Logic
loginBtn.addEventListener("click", function () {

    let emailValue = emailInput.value.trim();
    let passwordValue = passwordInput.value.trim();

    // Empty validation
    if (emailValue === "" || passwordValue === "") {
        message.style.color = "red";
        message.innerText = "Please fill all fields";
        return;
    }

    // Dummy credentials
    if (
        emailValue === "dealer@myntra.com" &&
        passwordValue === "12345"
    ) {
        message.style.color = "green";
        message.innerText = "Login Successful";

        // Store login session
        localStorage.setItem("dealerEmail", emailValue);

        // Redirect after 2 sec
        setTimeout(function () {
            window.location.href = "dashboard.html";
        }, 2000);

    } 
    else {
        message.style.color = "red";
        message.innerText = "Invalid Credentials";
    }

});


// Forgot Password
forgotBtn.addEventListener("click", function () {
    alert("Password reset link sent to your email");
});