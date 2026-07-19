function dateFormating(date) {
	// write your code here
    var result = [];
    var dateArr = date.split('-');
    result.push(dateArr[2]);
    result.push(dateArr[1]);
    result.push(dateArr[0]);
    return result.join('-');
}

console.log(dateFormating('2016-12-01'));