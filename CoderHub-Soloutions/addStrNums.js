function addStrNums(num1, num2) {
    let n1 = parseInt(num1, 10)
    let n2 = parseInt(num2, 10)
    // check the inputs themselves: the old check (isNaN(res / 0)) also
    // returned -1 whenever the sum was 0, because 0 / 0 is NaN
    if (isNaN(n1) || isNaN(n2)) {
        return -1;
    }
    return n1 + n2;
}
console.log(addStrNums("dee", "6"))
