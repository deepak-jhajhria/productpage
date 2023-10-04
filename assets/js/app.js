function openTab(tabId) {

    var tabButtons = document.querySelectorAll(".tab-button");
    var tabContents = document.querySelectorAll(".tab-content");

    
    tabContents.forEach(function(tabContent) {
        tabContent.style.display = "none";
    });

    tabButtons.forEach(function(tabButton) {
        tabButton.classList.remove("active");
    });

    document.getElementById(tabId).style.display = "block";

    tabButtons.forEach(function(button) {
        if (button.getAttribute("onclick").includes(tabId)) {
            button.classList.add("active");
        }
    });
}