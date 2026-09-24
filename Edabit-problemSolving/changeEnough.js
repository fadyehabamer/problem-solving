function changeEnough(change, amountDue) {
  // count in whole cents: adding 0.25 / 0.1 / 0.05 / 0.01 as floats can land
  // just below the exact amount (e.g. 5 nickels + 9 pennies = 0.33999999999999997)
  let result = 0;
  let prices = [25, 10, 5, 1];
  for (let i = 0; i < change.length; i++) {
    result += change[i] * prices[i];
  }
  if (result < Math.round(amountDue * 100)) {
    return false;
  } else {
    return true;
  }
}
changeEnough([10, 0, 0, 50], 3.85);
