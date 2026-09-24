function countOnes(num) {
    var binary = num.toString(2);
    var count = 0;
    for (var i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            count++;
        }
    }
    return count;
}

console.log(countOnes(17));
