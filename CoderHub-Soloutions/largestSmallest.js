function largestSmallest(array) {
  //  sort a copy so the caller's array keeps its order
  let sorted = [...array].sort(function(a, b) {
    return a - b;
  })
  console.log(sorted);
  console.log( [ sorted[sorted.length - 1], sorted[0] ] ); 
  return [ sorted[sorted.length - 1], sorted[0] ];
}

largestSmallest([2 , 4 , 9 , 23 , 435 ])