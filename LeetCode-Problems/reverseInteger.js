var reverse = function (x) {
  let stringx = x.toString();
  let result = [];
  for (let i = stringx.length - 1; i >= 0; i--) {
    if (x >= 0) {
      result.push(Number(stringx[i]));
    } else {
      result[0] = '-';
      result.push(stringx[i]);
      result.splice(stringx.length);
    }
  }
  // join() gives a string such as "021"; convert it so we return 21 (a number)
  let reversed = Number(result.join(''));
  if (reversed >= -2147483648 && reversed <= 2147483647) {
    return reversed;
  } else {
    return 0;
  }
};
