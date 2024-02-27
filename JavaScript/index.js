// function for tab change in home page
function selectTab(index,value) {
  const tabs = document.querySelectorAll(".tab");
  const description = document.getElementById("description");
  const review = document.getElementById("review");
  tabs.forEach((tab) => tab.classList.remove("selected"));
  tabs[index].classList.add("selected");

  if(value==="new") {
    description.style.transform = "translateX(0px)";
    review.style.transform = "translateX(0px)";
  }
  else if(value==="feature") {
    description.style.transform = "translateX(1200px)";
    review.style.transform = "translateX(1200px)";
  }
  {
    description.style.transform = "translateX(1200px)";
    review.style.transform = "translateX(1200px)";
  }

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

// for product tabs

