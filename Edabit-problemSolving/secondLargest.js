function secondLargest(arr) {
  // sort a copy (sort() is in place) and return the value instead of logging it n times
  let sorted = [...arr].sort(function (a, b) {
    return a - b;
  });
  return sorted[sorted.length - 2];
}
console.log(secondLargest([2, 3, 1, 0, 4, 66, 9]));
