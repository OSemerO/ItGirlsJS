

let totalPriceElement = document.getElementById('total');
let price = totalPriceElement.textContent; 
console.log(price);
const discount = document.querySelector(".discount"); //кнопка

discount.addEventListener("click", () => {
    totalPriceElement.textContent = +price - (+price * 20 / 100);});







