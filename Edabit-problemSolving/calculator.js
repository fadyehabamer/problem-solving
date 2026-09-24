function calculator(num1, operator, num2) {
  // return every result (only the divide-by-zero branch used to return;
  // the others just logged, so the function returned undefined)
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 == 0) {
      return "Can't divide by 0!";
    } else {
      return num1 / num2;
    }
  }
}
