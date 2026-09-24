function sortArray(array) {
    return [...array].sort(function(a, b) {
        return a - b;
    });
}
console.log(sortArray([2,1]));
