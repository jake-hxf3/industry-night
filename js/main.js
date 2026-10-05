const burger = document.querySelector("#burger");
const nav = document.querySelector("#burger-con");

nav.classList.remove("nojs");
nav.classList.remove("collapsible");


function toggleMenu() {
    console.log("burger clicked");
    nav.classList.toggle("collapsible");
    burger.classList.toggle("clicked");
}

burger.addEventListener("click", toggleMenu);