// function for tab change in home page
function selectTab(index, value) {
  const tabs = document.querySelectorAll(".tab");
  const news = document.getElementById("new");
  const feature = document.getElementById("feature");
  const top = document.getElementById("top");
  tabs.forEach((tab) => tab.classList.remove("selected"));
  tabs[index].classList.add("selected");

  if (value === "new") {
    news.style.display = "block";
    feature.style.display = "none";
    top.style.display = "none";
  } else if (value === "feature") {
    news.style.display = "none";
    feature.style.display = "block";
    top.style.display = "none";
  } else if (value === "top") {
    news.style.display = "none";
    feature.style.display = "none";
    top.style.display = "block";
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

// for dropdown menu
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// handle dropdown 
function handleDropdownItem(index) {
  const dropdown_item = document.querySelectorAll(".dropdown-item");
  dropdown_item.forEach((tab) => tab.classList.remove("selected"));
  dropdown_item[index].classList.add("selected");
}