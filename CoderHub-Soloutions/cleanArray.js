function cleanArray(arr) {
	// write your code here
    // remove null items from array
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== null) {
            result.push(arr[i]);
        }
    }
    return result;
}