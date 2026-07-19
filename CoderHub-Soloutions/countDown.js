function countDown(number) {
	// write your code here
    var result = [];
    for (var i = number; i >= 0; i--) {
        result.push(i);
    }
    return result.join(' ')
}
