// function for tab change in home page
function selectTab(index) {
  // Remove 'selected' class from all tabs
  let tabs = document.querySelectorAll(".tab");
  console.log(tabs, "tabs");
  tabs.forEach((tab) => tab.classList.remove("selected"));

  // Add 'selected' class to the clicked tab
  tabs[index].classList.add("selected");
}

// Function for password toggle in account page

const passwordField = document.getElementById("password");
const togglePassword = document.querySelector(".password-toggle-icon i");

togglePassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }
});
