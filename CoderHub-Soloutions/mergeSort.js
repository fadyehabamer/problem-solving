function mergeSort(node1, node2) {
   let newArray = node1.concat(node2)
   return newArray.sort(function(a, b){return a-b});
}

console.log(mergeSort([1,3,5,7,9], [2,4,6,8,10]));