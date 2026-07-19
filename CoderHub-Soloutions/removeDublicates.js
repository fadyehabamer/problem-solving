function removeDuplicate(arr) {
	// write your code here
    // var newArr = [];
    // for (var i = 0; i < arr.length; i++) {
    //     if (newArr.indexOf(arr[i]) === -1) {
    //         newArr.push(arr[i]);
    //     }
    // }
    // return newArr;

    return [... new Set(arr)]
}