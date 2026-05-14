let dealerInfo = document.getElementById("dealerInfo");
let logoutBtn = document.getElementById("logoutBtn");

// Get logged in email
let email = localStorage.getItem("dealerEmail");

// If no login found
if (!email) {
    window.location.href = "login.html";
}

// Display email
dealerInfo.innerText = "Logged in as: " + email;


// Logout
logoutBtn.addEventListener("click", function () {

    localStorage.removeItem("dealerEmail");

    alert("Logged out successfully");

    window.location.href = "login.html";
});