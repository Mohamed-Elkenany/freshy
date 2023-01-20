let menu = document.querySelector(".header .menu-bar");
let nav = document.querySelector(".header .navbar");
menu.onclick = function () {
    nav.classList.toggle("active");
};