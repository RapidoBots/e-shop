function selectTab(index) {
    // Remove 'selected' class from all tabs
    let tabs = document.querySelectorAll('.tab');
    console.log(tabs,"tabs")
    tabs.forEach(tab => tab.classList.remove('selected'));
  
    // Add 'selected' class to the clicked tab
    tabs[index].classList.add('selected');
  }