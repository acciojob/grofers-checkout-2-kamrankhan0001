//your code here
const prices = document.querySelectorAll('[data-ns-test="prices"]');
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
      total += parseFloat(prices[i].textContent);
    }
    const grandTotal = document.querySelector('[data-ns-test="grandTotal"]');
    grandTotal.textContent = total.toFixed(2);
