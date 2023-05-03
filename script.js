//your code here
const prices = document.querySelectorAll('[data-ns-test="prices"]');
let totalPrice = 0;
prices.forEach((price) => {
  totalPrice += parseFloat(price.innerText);
});

const grandTotalCell = document.querySelector('[data-ns-test="grandTotal"]');
grandTotalCell.innerText = totalPrice.toFixed(2);
