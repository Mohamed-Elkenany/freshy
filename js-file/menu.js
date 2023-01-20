let menu = document.querySelector(".body .header .contact .menu-bar");
let nav = document.querySelector(".body .header .navbar");
let removeNav = document.querySelector(".body .header .navbar .move");
let btn = document.querySelectorAll("#master tbody tr");
let totalItims = document.querySelector("#subtable table .total-items");
let amount = document.querySelectorAll("table tr .amount");
let totalCost = document.querySelector("#subtable table .total-cost");
let countItems = document.querySelector(".body .count-items");
let decreament = document.querySelectorAll("table td .decreament");
let increament = document.querySelectorAll("table td .increament");
let orderDone = document.querySelector("#subtotal .container #btn");
let overDone = document.querySelector(".over-done");
btn.forEach(btn => {
    btn.onmouseenter = function () {
        btn.classList.add("active");
        let decreament = document.querySelector("table .active .decreament");
        let increament = document.querySelector("table .active .increament");
        let amount = document.querySelector("table .active .amount");
        let subtotal = document.querySelector("table tbody .active .subtotal");
        let price = document.querySelector("table tbody .active .price");
        decreament.onclick = function () {
            if (amount.value <= 0) {
                amount.value = 0;
                subtotal.innerHTML = "0";
                decreament.disabled = false;
            } else {
                countItems.style.display = "block";
                amount.value = parseInt(amount.value) - 1;
                subtotal.innerHTML -= price.innerHTML;
                totalItims.innerHTML -= 1;
                totalCost.innerHTML -= price.innerHTML;
            }

        }
        increament.onclick = function () {
            decreament.style.zIndex="1000";
            amount.value = parseInt(amount.value) + 1;
            subtotal.innerHTML = `${parseFloat(subtotal.innerHTML) + parseFloat(price.innerHTML)}`;
            totalCost.innerHTML = `${parseFloat(totalCost.innerHTML) + parseFloat(price.innerHTML)}`;
            totalItims.innerHTML = `${parseInt(totalItims.innerHTML) + 1}`;
        }
    }
    btn.onmouseleave = function () {
        btn.classList.remove("active")
    }
});
let navBar = document.querySelector(".header .navbar");
let menuBar = document.querySelector(".header .menu-bar");
let move = document.querySelector(".header .move");
menuBar.onclick = function () {
    navBar.classList.toggle("active");
};
orderDone.addEventListener("click", () => {
    if (totalCost.innerHTML !== "0") {
        overDone.classList.add("active");
        setTimeout(function () {
            location.reload(true);
        }, 800);
    }
});
