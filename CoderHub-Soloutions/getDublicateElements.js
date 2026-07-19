function getDuplicateElements(arr) {
	// write your code here
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i) {
            result.push(arr[i]);
        }
    }
    return result;
}