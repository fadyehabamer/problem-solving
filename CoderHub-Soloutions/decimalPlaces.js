function DecimalPlaces(num) {
    // write your code here
    var str = num.toString();
    var dot = str.indexOf('.');
    if (dot == -1) {
        return 0;
    }
    return parseInt(str.length - dot - 1); // 3.13   --> 4-1-1 = 2

}
console.log(DecimalPlaces("50")); // 0
console.log(DecimalPlaces("0.1")); // 1
console.log(DecimalPlaces("324235346537.65436346")); // 2
