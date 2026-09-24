function match_array(array1, array2) {
    // same length and every element of array1 used exactly once in array2
    if (array1.length !== array2.length) {
        return false;
    }
    var remaining = array2.slice();
    for (var i = 0; i < array1.length; i++) {
        var index = remaining.indexOf(array1[i]);
        if (index === -1) {
            return false;
        }
        remaining.splice(index, 1);
    }
    return true;

}

console.log(match_array(["word1", "wo", "word2"], ["word2", "word1", "wo"]));
