/*
New Update
*/

let menuContent = document.querySelector(".menu-content");
let dirMove = document.querySelectorAll(".direction i");
let firstBox = menuContent.querySelectorAll(".menu-box")[0];
let firstBoxWidth = firstBox.clientWidth + 15;
let isMove = false, prevPageX, prevScrollLeft;
let isSMove = (e) => {
    isMove = true;
    prevPageX = e.pageX;
    prevScrollLeft = menuContent.scrollLeft;

}
dirMove.forEach(i => {
    i.addEventListener("click", () => {
        menuContent.scrollLeft += i.id == "left" ? firstBoxWidth : -firstBoxWidth;
        menuContent.style.scrollBehavior = "smooth";
    });
});
let scrollMove = (e) => {
    if (!isMove) return;
    let postionDiff = e.pageX - prevPageX;
    menuContent.scrollLeft = prevScrollLeft - postionDiff;
    e.preventDefault();
}
let isStopmove = () => {
    isMove = false;
}
menuContent.addEventListener("mousedown", isSMove);
menuContent.addEventListener("mousemove", scrollMove);
menuContent.addEventListener("mouseup", isStopmove);
let testBox = document.querySelectorAll(".conttent .test-box");
let randomNumber = Math.floor(Math.random() * testBox.length);
let signup = document.querySelector(".sign-up");
let logIn = document.querySelector(".log-in");
let loginForm = document.querySelector(".login-form");
let signupForm = document.querySelector(".signup-form");

signup.onclick = function () {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
}
logIn.onclick = function () {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
}
let layout = document.querySelector(".overlay");
let signIn = document.querySelector(".header-btn");
let eyeHeddin = document.querySelectorAll(".overlay .eye-icon");
let inputType = document.querySelectorAll(".input-field input");


eyeHeddin.forEach(eye => {
    eye.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.querySelectorAll(".input-field input").forEach(pw => {
            if (pw.type === 'password') {
                pw.type = 'text';
                eye.classList.replace("fa-eye-slash", "fa-eye");
                return;
            }
            pw.type = 'password';
            eye.classList.replace("fa-eye","fa-eye-slash");
        });
    });
});
signIn.onclick = function () {
    layout.style.top = '0';
}
let removeOvarlay = document.querySelectorAll(".remove-overlay");
removeOvarlay.forEach(element => {
    element.addEventListener("click", () => {
        layout.style.top = '-2000px';
    });
});
let navBar = document.querySelector(".header .navbar");
let menuBar = document.querySelector(".header .menu-bar");
let move = document.querySelector(".header .move");
menuBar.onclick = function () {
    navBar.classList.toggle("active");
};

