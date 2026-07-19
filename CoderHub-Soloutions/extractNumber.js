function extractNumber(num, nums) {
  // write your code here
  // Write a function that receives two inputs, an array of integer numbers, and an integer number. 
  //The function moves all numbers representing the integer to the end of the list while preserving the order of the other elements, 
  // and returns the array in the new order.

  let newArr = [];
  let numArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== num) {
      newArr.push(nums[i]);
    } else {
      numArr.push(nums[i]);
    }
  }
  return newArr.concat(numArr);
}
console.log(extractNumber(17, [-1, 2, 17, 17, 17, 4]));
