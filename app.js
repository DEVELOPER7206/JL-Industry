const count = document.querySelector(".incre_decre_btn span");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");

let value = 1;

increment.addEventListener("click", () => {
    value++;
    count.textContent = value;
});

decrement.addEventListener("click", () => {
    if (value > 1) {
        value--;
        count.textContent = value;
    }
});
const requestBtn = document.querySelector(".request_btn a");
const popup = document.querySelector(".popup");

requestBtn.addEventListener("click", function(e){
    e.preventDefault();
    popup.classList.add("show");
});

document.addEventListener("click", function(e){
    if(e.target.closest(".click_crose")){
        popup.classList.remove("show");
    }
});

          document.getElementById("phone-number").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
});
document.querySelectorAll(".incre_decre_btn, .tabel_count").forEach((box) => {

    const minus = box.querySelector(".decrement");
    const plus = box.querySelector(".increment");
    const number = box.querySelector("span");

    plus.onclick = function () {
        number.innerText = parseInt(number.innerText) + 1;
    };

    minus.onclick = function () {
        let value = parseInt(number.innerText);

        if (value > 1) {
            number.innerText = value - 1;
        }
    };

});
const tableBox = document.querySelector(".tabel_count");

const tableCount = tableBox.querySelector("span");
const tableIncrement = tableBox.querySelector(".increment1");
const tableDecrement = tableBox.querySelector(".decrement1");

let tableValue = 1;

tableIncrement.addEventListener("click", function () {
    tableValue++;
    tableCount.textContent = tableValue;
});

tableDecrement.addEventListener("click", function () {
    if (tableValue > 1) {
        tableValue--;
        tableCount.textContent = tableValue;
    }
});

