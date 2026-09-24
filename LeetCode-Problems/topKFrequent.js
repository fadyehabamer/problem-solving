var topKFrequent = function (nums, k) {
  let counts = new Map();
  for (let num of nums) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  let buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (let [num, count] of counts) {
    buckets[count].push(num);
  }

  let res = [];
  for (let count = buckets.length - 1; count > 0 && res.length < k; count--) {
    for (let num of buckets[count]) {
      res.push(num);
      if (res.length === k) {
        break;
      }
    }
  }
  return res;
};

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2));
