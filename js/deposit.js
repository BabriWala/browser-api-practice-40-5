// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = getInputFieldValueById("deposit-field");
  // console.log(newDepositAmount);
  /* 
    1. get previous deposit total by id

    */
  const previousDepositTotal = getTextElementValueById("deposit-total");
  // console.log(previousDepositTotal)

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  // console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
  // console.log(newDepositTotal);
  // set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);
  // console.log(setTextElementValueById);

  // // get previous balance by using the function
  const previousBalanceTotal = getTextElementValueById("balance-total");
  // console.log(previousBalanceTotal);
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  // console.log(newBalanceTotal)
  setTextElementValueById("balance-total", newBalanceTotal);
});
