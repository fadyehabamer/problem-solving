function numbersSum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {

        if (Number.isInteger(arr[i])) {
            result += arr[i]
        }

    }
    return result
}
console.log(numbersSum([1, 3, 4, "g"]))
