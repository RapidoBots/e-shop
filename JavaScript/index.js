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

