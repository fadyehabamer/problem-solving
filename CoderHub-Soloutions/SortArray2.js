function sortArray(array) {
    // write your code here
    var sortedArray = array.sort(function(a, b) {
        return a - b;
    })
    console.log(sortedArray); 
}
sortArray([2,1])