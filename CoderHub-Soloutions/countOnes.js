function countOnes(num) {
	// convert to binary
    var binary = num.toString(2);
    // count the number of 1s
    var count = 0;
    for (var i = 0; i < binary.length; i++) {
        if (binary[i] == 1) {
            count++;
        }
    }
    console.log (count);
}

countOnes(17
    )