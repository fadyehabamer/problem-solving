function largestSmallest(array) {
  //  sort the array
  array.sort(function(a, b) {
    return a - b;
  })
  console.log(array);
  console.log( [ array[array.length - 1], array[0] ] ); 
}

largestSmallest([2 , 4 , 9 , 23 , 435 ])