let mobileView = document.querySelector(".mobileView");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let span1 = document.querySelector(".span1")
let span2 = document.querySelector(".span2")
let span3 = document.querySelector(".span3")
let navbtn = document.querySelector(".nav-btn")

menu.addEventListener("click", function () {
    mobileView.classList.toggle("show");
    body.classList.toggle("overflow-hidden");
    span1.classList.toggle("span4");
    span2.classList.toggle("span5");
    span3.classList.toggle("span6");
})
navbtn.addEventListener("click", function () {
    mobileView.classList.remove("show");
    body.classList.remove("overflow-hidden");
    span1.classList.remove("span4");
    span2.classList.remove("span5");
    span3.classList.remove("span6");
})
 
let count = 1
let show = document.getElementById("show")
let increase = document.getElementById("increase")
let decrease = document.getElementById("decrease")
let addbutton = document. getElementById("addtocart")


increase.addEventListener("click", function(){
    count++;
    show.innerHTML = count;
});
decrease.addEventListener("click", function(){
    if(count > 1){count--;
    show.innerHTML = count;}
    
});
addbutton.addEventListener("click", function(){
     alert(count +  " Items added to your cart");
     
});

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