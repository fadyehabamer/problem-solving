function match_array(array1, array2) {
    var result = true;
    for (var i = 0; i < array2.length; i++) {
        if (array2.indexOf(array1[i]) === -1) {
            result = false;
        }
        console.log(array1.indexOf(array2[i]));
    }
    return result;

}

console.log(match_array(["word1", "wo", "word2"], ["word2", "word1", "wo"]));
