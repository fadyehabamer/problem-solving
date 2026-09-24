function even(nums) {
  let newarray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      newarray.push(nums[i]);
    }
  }
  return newarray;
}
console.log(even([10, 122, 34, 5, 6, 8, 9, 32, 3]));
