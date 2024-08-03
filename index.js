document.addEventListener("DOMContentLoaded", function () {
  let inputBill = document.querySelector(".input-for-bill");

  let inputTip = document.querySelector(".input-for-tip");

  let showTotal = document.querySelector(".show-total");
  let calculateButton = document.querySelector(".calulate");

  calculateButton.addEventListener("click", function (e) {
    e.preventDefault();

    let billAmount = parseFloat(inputBill.value);
    let tipPercentage = parseFloat(inputTip.value);

    if (!isNaN(billAmount) && !isNaN(tipPercentage)) {
      let tipAmount = billAmount * (tipPercentage / 100);
      let totalAmount = billAmount + tipAmount;
      showTotal.textContent = `Total: $${totalAmount.toFixed(
        2
      )} (including $${tipAmount.toFixed(2)} tip)`;
    } else {
      showTotal.textContent = "please inter valid number";
    }
  });
});
