const navbar = document.querySelector(".header .navbar");
const menu = document.querySelector(".header .menu-bar");
let decreament = document.querySelectorAll("table td .decreament");
let increament = document.querySelectorAll("table td .increament");
let totalItems = document.querySelector("#subtotal .total-items");
let totalCost = document.querySelector("#subtotal .total-cost");
let orderNow=document.querySelector("#subtotal #btn")
let overDone = document.querySelector(".over-done");
let countItems = document.querySelector(".header .count-items");
    decreament.forEach(element=> {
        element.addEventListener("click", (e)=> {
            let amount = e.target.parentElement.querySelector(".amount");
            let subTotal = e.target.parentElement.parentElement.parentElement.querySelector("td .subtotal");
            let price = e.target.parentElement.parentElement.parentElement.querySelector("td .price");
            if (amount.value !== "0") {
                amount.value = parseInt(amount.value) - 1;
                subTotal.innerHTML = `${parseFloat(subTotal.innerHTML) - parseFloat(price.innerHTML)}`;
                totalCost.innerHTML = `${parseFloat(totalCost.innerHTML) - parseFloat(price.innerHTML)}`;
                totalItems.innerHTML -= 1;
                countItems.style.display = "block";
                countItems.innerHTML -= 1;
            } else {
                countItems.style.display = "none";
            }
            });
    });
increament.forEach(element => {
    element.addEventListener("click", (e) => {
        let amount = e.target.parentElement.querySelector(".amount");
        amount.value = parseInt(amount.value) + 1;
        let subTotal = e.target.parentElement.parentElement.parentElement.querySelector("td .subtotal");
        let price = e.target.parentElement.parentElement.parentElement.querySelector("td .price");
        subTotal.innerHTML = `${parseFloat(price.innerHTML) + parseFloat(subTotal.innerHTML)}`;
        totalCost.innerHTML = `${parseFloat(price.innerHTML) + parseFloat(totalCost.innerHTML)}`;
        totalItems.innerHTML = `${parseInt(totalItems.innerHTML) + 1}`
                countItems.style.display = "block";
        countItems.innerHTML=`${parseInt(countItems.innerHTML) + 1}`
    });
});

menu.onclick = function () {
    navbar.classList.toggle("active");
}
orderNow.onclick = function () {
    if (totalCost.innerHTML !== "0") {
        overDone.classList.add("active");
        setTimeout(function () {
            location.reload(true);
        }, 800);
    };
};

