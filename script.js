//your code here
const prices = document.querySelectorAll('[data-ns-test=price]');
let totalPrice = 0;
//.forEach() method and add up their values using the += operator.
prices.forEach((price) => {
//parseFloat() to convert the cell values from strings
//to floating point numbers
  totalPrice += parseFloat(price.innerText);
});

const grandTotalCell = document.querySelector('[data-ns-test="grandTotal"]');
grandTotalCell.innerText = totalPrice.toFixed(2);//to show the price to 2 decimal places.
