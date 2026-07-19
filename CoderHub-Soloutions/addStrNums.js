function addStrNums(num1, num2) {
    let n1 = parseInt(num1, 10)
    let n2 = parseInt(num2, 10)
    let res = parseInt(n1+n2, 10)    
    if (isNaN(res / 0)) {
        console.log(-1);
    } else {
        console.log(res);
    }

}
addStrNums("dee", "6")

